# AGENTS.md

## Commands
- Build: `npm run build` (next build)
- Lint: `npm run lint` (next lint)
- Lint strict: `npm run lint:strict` (eslint --max-warnings=0 src)
- Test: `npm run test` (jest)
- Single test: `jest lib/__tests__/helper.test.ts`
- Typecheck: `npm run typecheck` (tsc --noEmit)
- Format: `npm run format` (prettier -w .)

## Code Style
- Formatting: Prettier (single quotes, semicolons, 2 spaces, arrow parens always, Tailwind plugin).
- Imports: Absolute with @/ for src/, ~/ for public/.
- Types: TypeScript strict mode, noImplicitAny false.
- Naming: CamelCase for variables/functions, PascalCase for components/types.
- Error handling: Use try-catch for async operations.
- ESLint: Extends Next.js core-web-vitals, some React hooks rules off.