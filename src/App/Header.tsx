import { memo } from "react";
import { GlHeader } from "gitlanding/GlHeader";
import { routes } from "router";
import { declareComponentKeys, useTranslation, useLang } from "i18n";
import { createLanguageSelect } from "onyxia-ui/LanguageSelect";
import type { Language } from "i18n";

const { LanguageSelect } = createLanguageSelect<Language>({
  languagesPrettyPrint: {
    en: "English",
    fr: "Francais",
  },
});

export const Header = memo(() => {
  const { t } = useTranslation({ Header });
  const { lang, setLang } = useLang();
  return (
    <GlHeader
      title={<h1>{t("headerTitle")}</h1>}
      links={[]}
      enableDarkModeSwitch={true}
      githubRepoUrl="https://github.com/abet-v"
      githubButtonSize="large"
      customItemEnd={{
        item: (
          <LanguageSelect
            language={lang}
            onLanguageChange={setLang}
            variant="big"
          />
        ),
      }}
    />
  );
});

export const { i18n } = declareComponentKeys<"headerTitle">()({ Header });
