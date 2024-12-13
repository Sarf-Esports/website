<!-- © 2022 REVATI -->
<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div>
	<p>
		{$_('privacy.policy.desc.0')} <a href="https://revati.jp">revati.jp</a>
		{$_('privacy.policy.desc.1')}
	</p>

	<h2>1. {$_('privacy.policy.1.0')}</h2>
	<p>{$_('privacy.policy.1.1')}</p>
	<ul>
		<li>{$_('privacy.policy.1.2')}</li>
		<li>{$_('privacy.policy.1.3')}</li>
		<li>{$_('privacy.policy.1.4')}</li>
	</ul>
	<p>
		{$_('privacy.policy.1.5')}
		<a href="https://cloudflare.com/web-analytics">Cloudflare Web Analytics</a>
		{$_('privacy.policy.1.6')}
	</p>

	<h2>2. {$_('privacy.policy.2.0')}</h2>
	<p>{$_('privacy.policy.2.1')}</p>
	<ul>
		<li>{$_('privacy.policy.2.2')}</li>
		<li>{$_('privacy.policy.2.3')}</li>
		<li>{$_('privacy.policy.2.4')}</li>
		<li>{$_('privacy.policy.2.5')}</li>
	</ul>

	<h2>3. {$_('privacy.policy.3.0')}</h2>
	<p>{$_('privacy.policy.3.1')}</p>
	<ul>
		<li>{$_('privacy.policy.3.2')}</li>
		<li>{$_('privacy.policy.3.3')}</li>
		<li>{$_('privacy.policy.3.4')}</li>
	</ul>

	<h2>4. {$_('privacy.policy.4.0')}</h2>
	<p>{$_('privacy.policy.4.1')}</p>
	<ul>
		<li>{$_('privacy.policy.4.2')}</li>
		<li>{$_('privacy.policy.4.3')}</li>
	</ul>
	<p>{$_('privacy.policy.4.4')}</p>

	<h2>5. {$_('privacy.policy.5.0')}</h2>
	<p>{$_('privacy.policy.5.1')}</p>
	<ul>
		<li>{$_('privacy.policy.5.2')}</li>
		<li>{$_('privacy.policy.5.3')}</li>
	</ul>
	<p>{$_('privacy.policy.5.4')}</p>

	<h2>6. {$_('privacy.policy.6.0')}</h2>
	<p>{$_('privacy.policy.6.1')}</p>

	<h2>7. {$_('privacy.policy.7.0')}</h2>
	<p>{$_('privacy.policy.7.1')}</p>

	<h2>8. {$_('privacy.policy.8.0')}</h2>
	<p>
		{$_('privacy.policy.8.1')}<br />{$_('privacy.policy.8.2')}:
		<a href="mailto:contact.revati@gmail.com">contact.revati@gmail.com</a>
	</p>
</div>

<style lang="scss">
	@use '$lib/stylesheets/variables/mixin' as *;

	div,
	p {
		font-size: 18px !important;
		text-align: left !important;

		@include sp {
			font-size: 16px !important;
		}
	}

	p {
		margin: 0 !important;
		max-width: initial !important;
	}
</style>
