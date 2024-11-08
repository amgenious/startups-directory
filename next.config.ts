import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    dangerouslyAllowSVG:true,
    remotePatterns:[
      {
        protocol:'https',
        hostname:'*'
      }
    ]
  },
  experimental:{
    after:true
  },
  devIndicators:{
    appIsrStatus:true,
    buildActivity:true,
    buildActivityPosition:"bottom-right"
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
