<script lang="ts">
    import SocialIcons from "@rodneylab/svelte-social-icons";
    import Hoverable from "./Hoverable.svelte";
</script>

<div class="flex items-center justify-between my-4">
    <Hoverable let:hovering={active}>
        <a class="px-4 duration-150" href="https://github.com/vinceyyy"
            >{#if active}
                <SocialIcons
                    network="github"
                    fgColor="#eeeeee"
                    bgColor="#00B0F0"
                />
            {:else}<SocialIcons
                    network="github"
                    fgColor="#eeeeee"
                    bgColor="#111111"
                />
            {/if}
        </a>
    </Hoverable>

    <Hoverable let:hovering={active}>
        <a
            class="px-4 duration-150"
            href="https://www.linkedin.com/in/vincentwyan/"
            >{#if active}
                <SocialIcons
                    network="linkedin"
                    fgColor="#eeeeee"
                    bgColor="#00B0F0"
                />
            {:else}<SocialIcons
                    network="linkedin"
                    fgColor="#eeeeee"
                    bgColor="#111111"
                />
            {/if}
        </a>
    </Hoverable>
</div>
