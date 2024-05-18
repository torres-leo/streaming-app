/** @type {import('next').NextConfig} */
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig = {};

if (process.env.NODE_ENV === 'production') {
	await setupDevPlatform({
		persist: true,
	});
}

export default nextConfig;
