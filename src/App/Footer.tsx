import { memo } from "react";
import { GlFooter } from "gitlanding/GlFooter";
import { declareComponentKeys, useTranslation } from "i18n";

export const Footer = memo(() => {
  const { t } = useTranslation({ Footer });
  return (
    <GlFooter
      bottomDivContent={t("license")}
      email="vincentabet@gmail.com"
      phoneNumber="+33623510168"
    />
  );
});

export const { i18n } = declareComponentKeys<
  "license" | "link1label" | "link2label" | "link3label"
>()({ Footer });
