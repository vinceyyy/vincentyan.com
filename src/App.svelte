<script lang="ts">
    import Tag from "./components/Tag.svelte";
    import Social from "./components/Social.svelte";
    import { onMount } from "svelte";

    let heroVideo;
</script>

<main
    class="relative antialiased h-screen relative flex items-center justify-center mb-12 overflow-hidden"
>
    <div
        class="content text-gray-300 z-1 relative z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl"
    >
        <div class="container lg:px-6 mx-auto content">
            <div class="flex flex-col items-center justify-center  md:px-6">
                <h1 class="text-4xl p-4 font-bold">Vincent Yan</h1>
                <Tag />
                <Social />
            </div>
        </div>
    </div>
    <div class="video-container absolute -z-1">
        <video
            src="./movie.webm"
            autoplay
            loop
            muted
            playsinline
            bind:this={heroVideo}
        />
    </div>
</main>
