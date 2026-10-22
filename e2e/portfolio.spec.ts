import { expect, test } from '@playwright/test';

test('project discovery, language persistence, case study and next navigation', async ({ page }) => {
  await page.goto('/projects');
  await expect(page.locator('main article')).toHaveCount(7);
  await page.getByRole('button', { name: 'English', exact: true }).click();
  const search = page.getByRole('searchbox', { name: 'Search projects' });
  await search.fill('Django');
  await expect(page.locator('main article')).toHaveCount(1);
  await page.getByRole('button', { name: 'Mobile', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'No matching projects' })).toBeVisible();
  await page.getByRole('button', { name: 'Clear filters', exact: true }).first().click();
  await expect(page.locator('main article')).toHaveCount(7);
  await page.getByRole('button', { name: 'Testing', exact: true }).click();
  await expect(page.locator('main article')).toHaveCount(1);
  await page.locator('main article').getByRole('link', { name: 'View case study', exact: true }).click();
  await expect(page).toHaveURL(/\/projects\/shuttle-testing$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Shuttle Route Management & Software Testing');
  await page.getByRole('link', { name: /Next project/ }).click();
  await expect(page).toHaveURL(/\/projects\/flic-dashboard$/);
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('FLIC — Customer Service WebChat Dashboard');
  await page.getByRole('link', { name: 'All projects', exact: true }).first().click();
  await expect(page.locator('main article')).toHaveCount(7);
});

test('mobile navigation opens, navigates and closes', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Mở menu', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Đóng menu', exact: true })).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation').getByRole('link', { name: /Dự án/, exact: true }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole('button', { name: 'Mở menu', exact: true })).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('main article')).toHaveCount(7);
});

test('timeline links directly to confirmed projects and back-to-top works', async ({ page }) => {
  await page.goto('/journey');
  await expect(page.locator('main article h3')).toHaveText([
    'Bắt đầu hành trình đại học', 'Tham gia nghiên cứu khoa học', 'Dự án quản lý cửa hàng tạp hóa Minh', 'Nghiên cứu về hành vi người tiêu dùng', 'Xây dựng hệ thống quản lý văn bản',
  ]);
  for (const index of [0, 1]) await expect(page.locator('main article').nth(index).locator('a, button, details')).toHaveCount(0);
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('main article h3')).toHaveText([
    'Starting university', 'Taking part in academic research', 'Minh grocery store management project', 'Researching consumer behavior', 'Building a document management system',
  ]);
  await expect(page.locator('main').getByRole('link', { name: 'View project', exact: true })).toHaveCount(3);
  await page.getByRole('button', { name: 'Tiếng Việt', exact: true }).click();
  const milestone = page.locator('main article').filter({ has: page.getByRole('heading', { name: 'Dự án quản lý cửa hàng tạp hóa Minh', exact: true }) });
  await expect(page.locator('main article details')).toHaveCount(0);
  await expect(page.locator('main').getByRole('link', { name: 'Xem dự án', exact: true })).toHaveCount(3);
  await milestone.getByRole('link', { name: 'Xem dự án', exact: true }).click();
  await expect(page).toHaveURL(/\/projects\/minh-grocery$/);
  await expect(page.getByRole('heading', { name: 'Hệ thống quản lý cửa hàng tạp hóa Minh', exact: true })).toBeVisible();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  const backToTop = page.getByRole('button', { name: 'Về đầu trang', exact: true });
  await expect(backToTop).toBeVisible();
  await backToTop.click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await page.goto('/');
  await expect(page.locator('.timeline-compact article h3')).toHaveText([
    'Bắt đầu hành trình đại học', 'Dự án quản lý cửa hàng tạp hóa Minh', 'Xây dựng hệ thống quản lý văn bản',
  ]);
  await expect(page.locator('.timeline-compact').getByRole('link', { name: 'Xem dự án', exact: true })).toHaveCount(2);
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('.timeline-compact article h3')).toHaveText([
    'Starting university', 'Minh grocery store management project', 'Building a document management system',
  ]);
});

test('unknown paths and project slugs have useful recovery links', async ({ page }) => {
  await page.goto('/projects/unknown-case-study');
  await expect(page.getByRole('heading', { name: 'Không tìm thấy dự án' })).toBeVisible();
  await page.getByRole('link', { name: 'Tất cả dự án', exact: true }).click();
  await expect(page.locator('main article')).toHaveCount(7);
  await page.goto('/unknown-page');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('main a[href="/"]')).toBeVisible();
});

test('a failed lazy page preserves navigation, localizes its error and reloads successfully', async ({ page }) => {
  await page.route('**/src/pages/About.tsx*', (route) => route.abort());
  await page.goto('/');
  await page.locator('.site-header').getByRole('link', { name: 'Về tôi', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Nội dung chưa thể hiển thị.');
  await expect(page.locator('.site-header')).toBeVisible();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('This content could not be displayed.');
  await page.locator('.site-header').getByRole('link', { name: 'Projects', exact: true }).click();
  await expect(page.locator('main article')).toHaveCount(7);
  await expect(page.getByRole('alert')).toHaveCount(0);
  await page.locator('.site-header').getByRole('link', { name: 'About', exact: true }).click();
  await expect(page.getByRole('alert')).toBeVisible();
  await page.unroute('**/src/pages/About.tsx*');
  await page.getByRole('button', { name: 'Reload page', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('One learner.');
  await expect(page.getByRole('alert')).toHaveCount(0);
});

for (const width of [375, 768, 1440]) {
  test(`pages fit a ${width}px viewport without horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/about', '/journey', '/projects', '/projects/document-workflow', '/projects/camsin', '/achievements']) {
      await page.goto(route);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      const dimensions = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, viewport: window.innerWidth }));
      expect(dimensions.content, `${route} overflowed at ${width}px`).toBeLessThanOrEqual(dimensions.viewport + 1);
    }
  });
}
