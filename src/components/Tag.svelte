<script lang="ts">
    const tags = ["Data Analyst", "Full-stack Developer", "Marketer"];
    const t = Array.from(tags.entries());
</script>

<div class="flex items-center justify-between cursor-default">
    {#each t as [index, tag]}
        {#if index !== 0}
            <div class="h-2 border-l-2" />
        {/if}
        <p
            class="mx-8 mb-0.5 font-bold hover:text-black transition-all duration-300"
        >
            {tag}
        </p>
    {/each}
</div>
