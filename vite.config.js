import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';


export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            output: [
                "public/css/app.css",
                "public/js/app.js"
            ],
            refresh: true,
        }),
        
    ],
});
