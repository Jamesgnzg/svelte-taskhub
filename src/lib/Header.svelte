<script lang="ts">
	import HubIcon from '../lib/assets/HubIcon.png';
	import NotificationsIcon from '../lib/assets/notification.png';
	import InboxIcon from '../lib/assets/inbox.png';
	import InviteIcon from '../lib/assets/add-user.png';
	import MarketPlaceIcon from '../lib/assets/puzzle.png';
	import AutoPilotHubIcon from '../lib/assets/bot.png';
	import SearchIcon from '../lib/assets/search.png';
	import HelpIcon from '../lib/assets/question.png';
	import MenuIcon from '../lib/assets/menu.png';
	import { Portal, Tooltip } from '@skeletonlabs/skeleton-svelte';
	// Temporary avatars
	import FavIcon from '../lib/assets/favicon.svg';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';

	const headerMenus: { icon: string; text: string }[] = [
		{
			icon: NotificationsIcon,
			text: 'Notifications'
		},
		{
			icon: InboxIcon,
			text: 'Inbox'
		},
		{
			icon: InviteIcon,
			text: 'Invite'
		},
		{
			icon: MarketPlaceIcon,
			text: 'Market Place'
		},
		{
			icon: AutoPilotHubIcon,
			text: 'Auto Pilot'
		},
		{
			icon: SearchIcon,
			text: 'Search'
		},
		{
			icon: HelpIcon,
			text: 'Help'
		}
	];
</script>

{#snippet navBarButton(icon: string, altText: string)}
	<button class="rounded p-2 hover:bg-gray-200">
		<img class="h-4" src={icon} alt={altText} />
	</button>
{/snippet}

<div class="w-full">
	<div class="flex flex-row items-center justify-between">
		<div class="flex p-3 font-bold">
			<img class="me-1 -mt-px h-6" src={HubIcon} alt="Hub Icon" />
			<span class="self-center font-semibold whitespace-nowrap">TaskHub</span>
		</div>
		<div class="flex items-center gap-2 p-3">
			{#each headerMenus as menu}
				{@render navBarButton(menu.icon, menu.text)}
			{/each}
			<hr class="h-6 border-r border-gray-300" />
			{@render navBarButton(MenuIcon, 'Menu')}
			<div
				class="flex cursor-pointer items-center gap-0.5 rounded rounded-r-xl pl-0.5 hover:bg-gray-300"
			>
				<img class="me-1 h-6" src={FavIcon} alt="FavIcon" />
				<Avatar class="h-6.5 w-6.5 bg-amber-500 font-bold text-gray-100">
					<Avatar.Fallback>JG</Avatar.Fallback>
				</Avatar>
			</div>
		</div>
	</div>
</div>
