module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ]
}
