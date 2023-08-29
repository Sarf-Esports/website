<script lang="ts">
    import { locale } from 'svelte-i18n';

    let lang = $locale;

    $: locale.set(lang);
</script>

<span>Language</span><select bind:value={lang}>
    <option value="ja">日本語</option>
    <option value="en">English</option>
    <option value="ko">한국어</option>
</select>

<style lang="scss">
    span {
        color: #f6ffdb;
        font-size: 14px;
        font-weight: 900;
        margin-right: 4px;

        &:after {
            content: ':';
            margin-left: 1px;
        }
    }

    select {
        color: #e8ffa4;
        font-size: 16px;
        font-weight: 600;
        background-color: #363f21;
        border: 4px solid #151b03;
        border-radius: 4px;
        padding: 3px 0 3px 5px;
        cursor: pointer;
    }
</style>