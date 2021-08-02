module.exports = {
    root: true,
    overrides: [
        {
            files: ["*.ts"],
            parserOptions: {
                project: ["tsconfig.*?.json"],
                sourceType: "module",
                createDefaultProgram: true
            },
            extends: [
                "plugin:@angular-eslint/recommended",
                "airbnb-typescript/base",
                "eslint-config-prettier",
                "plugin:prettier/recommended"
            ],
            rules: {
                "no-console": "error",
                "default-case": "warn",
                eqeqeq: "error",
                camelcase: "error",
                "import/prefer-default-export": "off"
            }
        },
        {
            files: ["*.component.html"],
            extends: ["plugin:@angular-eslint/template/recommended"],
            rules: {
                "max-len": ["error", { code: 140 }]
            }
        },
        {
            files: ["*.component.ts"],
            extends: ["plugin:@angular-eslint/template/process-inline-templates"]
        },
        {
            files: ["src/**/*.spec.ts", "src/**/*.d.ts"],
            parserOptions: {
                project: ["tsconfig.*?.json"]
            },
            extends: ["plugin:jest/all"],
            plugins: ["jest"],
            env: { "jest/globals": true }
        }
    ]
};
