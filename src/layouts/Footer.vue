<script setup></script>

<template>
    <!-- Footer Start -->
    <footer class="bg-theme-dark-blue py-10">
        <div class="container mx-auto px-5">
            <div class="grid md:grid-cols-2">
                <div class="flex flex-col md:flex-row md:space-x-12 items-center">
                    <div class="mb-10 md:mb-0">
                        <a
                            href="/"
                            class="uppercase px-4 py-2 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Ru Hickson
                        </a>
                    </div>
                    <ul class="flex flex-col md:flex-row flex-wrap space-y-3 md:space-y-0 md:space-x-6 text-xs text-center md:text-left font-theme-heading">
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="#projects" v-smooth-scroll>Portfolio</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a 
                                href="https://github.com/ruhickson/ruhickson/blob/main/Ru%20Hickson%20CV%20-%20May%202025.pdf"
                                target="_blank"
                                rel="noopener"
                            >CV</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="#about" v-smooth-scroll>About</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a 
                                href="https://downsell.netlify.app/"
                                target="_blank"
                                rel="noopener"
                            >Downsell</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a 
                                href="https://github.com/ruhickson/gitball"
                                target="_blank"
                                rel="noopener"
                            >Gitball</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="#skills" v-smooth-scroll>Skills</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a 
                                href="https://linkedin.com/in/ruhickson"
                                target="_blank"
                                rel="noopener"
                            >LinkedIn</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a 
                                href="https://github.com/ruhickson"
                                target="_blank"
                                rel="noopener"
                            >GitHub</a>
                        </li>
                    </ul>
                </div>
                <div class="md:place-self-end place-self-center mt-10 md:mt-0">
                    <ul class="flex space-x-8 items-center">
                        <li>
                            <a href="https://linkedin.com/in/ruhickson" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-linkedin text-white hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.821 0-1.358.54-1.358 1.248 0 .694.521 1.248 1.327 1.248h.015zm4.908 8.212h2.4V9.359c0-.216.016-.432.08-.586.176-.432.576-.88 1.248-.88.88 0 1.232.664 1.232 1.635v4.866h2.4V9.25c0-2.22-1.184-3.252-2.768-3.252-1.28 0-1.845.7-2.165 1.193v.025h-.016a5.6 5.6 0 0 1 .016-.025V6.169h-2.4c.032.7 0 7.225 0 7.225z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ruhickson" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-github text-white hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer End -->
</template>
