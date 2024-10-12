<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kerst Fantasie</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="antialiased bg-gray-900 flex flex-col justify-between h-screen">
<div class="flex flex-col items-center justify-center flex-grow">
    <h2 class="bg-gradient-to-r from-green-600 from-10% via-yellow-200 via-50% to-red-600 to-90% inline-block text-transparent bg-clip-text text-6xl md:text-8xl">
        Aftellen naar kerst</h2>
    <p class="text-4xl text-white mt-3" id="loading">Loading...</p>
    <div class="flex gap-5 text-white text-4xl md:text-6xl mt-4" id="countdown">
        <div class="flex flex-col items-center"></div>
        <div class="flex flex-col items-center"></div>
        <div class="flex flex-col items-center"></div>
        <div class="flex flex-col items-center"></div>
    </div>
</div>
<footer class="text-white opacity-60 text-center text-base p-4">
    <p>© 2024 Kerst Fantasie</p>
    <p id="dateText" class="mt-1"></p>
</footer>
</body>
</html>
