const LANGUAGE_EXTENSIONS = {
  jsonc: 'json',
  ts: 'typescript',
  json: 'json',
  tsx: 'typescript',
  js: 'javascript',
  md: 'markdown',
}

export const getLangFromFile = (file: string) => {
  const [, ext] = file.split('.')

  return LANGUAGE_EXTENSIONS[ext as keyof typeof LANGUAGE_EXTENSIONS] ?? 'text'
}
