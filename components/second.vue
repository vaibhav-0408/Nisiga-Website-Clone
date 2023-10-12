<script setup lang="ts">

</script>

<template>
    <div>
        <div class="w-full h-20 bg-white shadow-md">
            <div class="flex">
                <div class="flex">
                    <img src="/images/logo1.jpg" class="h-10 ml-20 w-8 mt-2">
                    <h1 class="text-xl text-black font-bold mt-4 ml-4">NISIGA</h1>
                </div>

                <div class="flex md:flex md:flex-grow flex-row justify-end mr-20 space-x-2">
                    <ul class="menu menu-horizontal px-1">
                        <li>
                            <NuxtLink to="/" class="text-black  font-semibold btn-ghost">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#1" class="text-black  font-semibold btn-ghost">Categories</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#2" class="text-black  font-semibold btn-ghost">Testimonials</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#" class="text-black  font-semibold btn-ghost">About NISIGA</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact" class="  font-semibold btn-primary mx-4 hover:bg-blue-500">Get Call</NuxtLink>
                        </li>

                    </ul>
                </div>


            </div>
        </div>
        
    </div>
</template>

<style  scoped>

</style>