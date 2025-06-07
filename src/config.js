export const siteConfig = {
  logoUrl: "https://i.ibb.co/c5Ljrdf/image-Photoroom.png",
  slogan: "Your Discord Shield, 24/7",
  botName: "SecureX",
  description: "SecureX is the ultimate Discord moderation bot that provides comprehensive security, advanced moderation tools, and seamless server management. Protect your community with enterprise-grade features.",
  callToAction: {
    primary: {
      text: "Add SecureX Now",
      icon: "Shield",
    },
    secondary: {
      text: "Join Support Server",
      icon: "MessageSquare",
    }
  },
  navLinks: [
    { href: "#features", label: "Features" },
    { href: "#commands", label: "Commands" },
    { href: "#stats", label: "Stats" },
  ],
  stats: [
    { number: "600K+", label: "Servers Protected" },
    { number: "12M+", label: "Users Secured" },
    { number: "99.99%", label: "Uptime" },
    { number: "24/7", label: "Dedicated Support" }
  ],
  features: [
    {
      icon: "Shield",
      title: "Advanced Moderation",
      description: "Comprehensive moderation tools to keep your server safe and organized."
    },
    {
      icon: "Zap",
      title: "Lightning Fast",
      description: "Ultra-fast response times with 99.99% uptime guarantee."
    },
    {
      icon: "Lock",
      title: "Security First",
      description: "Advanced security features including anti-raid and auto-moderation."
    },
    {
      icon: "Users",
      title: "User Management",
      description: "Complete user management system with roles, permissions, and verification."
    }
  ],
  commands: [
    {
      category: "Moderation",
      icon: "Shield",
      commands: [
        { name: "/ban", description: "Ban a user from the server", usage: "/ban @user [reason]" },
        { name: "/kick", description: "Kick a user from the server", usage: "/kick @user [reason]" },
        { name: "/mute", description: "Mute a user temporarily", usage: "/mute @user [duration] [reason]" },
        { name: "/warn", description: "Warn a user for misconduct", usage: "/warn @user [reason]" },
        { name: "/purge", description: "Delete multiple messages", usage: "/purge [amount]" },
        { name: "/timeout", description: "Timeout a user", usage: "/timeout @user [duration]" }
      ]
    },
    {
      category: "Security",
      icon: "Lock",
      commands: [
        { name: "/lockdown", description: "Lock all channels in the server", usage: "/lockdown [reason]" },
        { name: "/unlock", description: "Unlock all channels", usage: "/unlock" },
        { name: "/antiraid", description: "Enable anti-raid protection", usage: "/antiraid [on/off]" },
        { name: "/automod", description: "Configure automatic moderation", usage: "/automod setup" },
        { name: "/verify", description: "Set up verification system", usage: "/verify setup" },
        { name: "/whitelist", description: "Manage server whitelist", usage: "/whitelist add/remove @user" }
      ]
    },
    {
      category: "Utility",
      icon: "Settings",
      commands: [
        { name: "/userinfo", description: "Get information about a user", usage: "/userinfo [@user]" },
        { name: "/serverinfo", description: "Get server information", usage: "/serverinfo" },
        { name: "/avatar", description: "Get user's avatar", usage: "/avatar [@user]" },
        { name: "/roles", description: "Manage user roles", usage: "/roles add/remove @user @role" },
        { name: "/slowmode", description: "Set channel slowmode", usage: "/slowmode [seconds]" },
        { name: "/announce", description: "Make server announcements", usage: "/announce [message]" }
      ]
    },
    {
      category: "Logging",
      icon: "Eye",
      commands: [
        { name: "/logs", description: "View moderation logs", usage: "/logs [user/@user]" },
        { name: "/setlog", description: "Set logging channel", usage: "/setlog #channel" },
        { name: "/auditlog", description: "View audit log entries", usage: "/auditlog [action]" },
        { name: "/modlog", description: "View moderation history", usage: "/modlog @user" },
        { name: "/joinlog", description: "Set join/leave logging", usage: "/joinlog #channel" },
        { name: "/msglog", description: "Set message logging", usage: "/msglog #channel" }
      ]
    }
  ],
  footerLinks: {
    product: [
      { label: "Features", href: "#features" },
      { label: "Commands", href: "#commands" },
      { label: "Premium", href: "#" },
    ],
    support: [
      { label: "Documentation", href: "#" },
      { label: "Discord Server", href: "#" },
      { label: "Contact", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "GDPR", href: "#" },
    ]
  },
  copyright: `© ${new Date().getFullYear()} SecureX. All rights reserved.`
};
