const lintStagesConfig = {
  '*.@(jsx|ts|tsx)': ['pnpm format', 'pnpm lint', 'git add -A .'],
};

module.exports = lintStagesConfig;
