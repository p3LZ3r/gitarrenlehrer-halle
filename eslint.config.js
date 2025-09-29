 const { FlatCompat } = require('@eslint/eslintrc');
 const compat = new FlatCompat();
 
 module.exports = [
   ...compat.extends('next/core-web-vitals'),
   {
     rules: {
       'react-hooks/rules-of-hooks': 'off',
       'react-hooks/exhaustive-deps': 'off',
       '@next/next/no-duplicate-head': 'off',
       '@next/next/no-page-custom-font': 'off',
       'react/display-name': 'off',
     },
   },
 ];