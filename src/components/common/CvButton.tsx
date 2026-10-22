import { Download } from "lucide-react";
import { useCvAsset } from "../../hooks/useCvAsset";
import { useI18n } from "../../i18n/I18nContext";
import { translations } from "../../i18n/translations";
import { profile } from "../../data/profile";

export function CvButton({
  className = "button button-ghost",
}: {
  className?: string;
}) {
  const { language } = useI18n();
  const copy = translations[language];
  const { available } = useCvAsset();
  return available ? (
    <a
      className={className}
      href={profile.cvPath}
      download="NguyenHuuQuoc_CV.pdf"
    >
      <Download size={16} />
      {copy.cv}
    </a>
  ) : null;
}
