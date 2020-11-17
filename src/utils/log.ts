// @ts-nocheck
// Since this module doesn't have typings and we don't currently support
// type declarations well, we disabled TS for this self-contained file
// TODO: fix typings on ts.config and use module declaration instead

import DraftLog from 'draftlog'

import { Language } from '../../typings/course'

export const logLanguage = (lang: Language) =>
  ` Language - ${lang.toUpperCase()}`

export const logProgress = (
  scriptStep: string,
  description: string,
  lang?: Language
) => {
  DraftLog(console)

  const log = console.draft(
    `${scriptStep.toUpperCase()}: Starting to update ${description}${
      lang ? logLanguage(lang) : ''
    }  ⏳`
  )

  return () =>
    log(
      `${scriptStep.toUpperCase()}: Updated ${description}${
        lang ? logLanguage(lang) : ''
      }  ✅`
    )
}
