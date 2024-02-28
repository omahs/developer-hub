import { Horizon } from "./roadmapData";

export const FfData: Horizon = {
  Now: {
    description: "What is being delivered now",
    feature: [
      {
        tag: [{ value: "Lifecycle Management" }],
        title: "Custom Configuration for Stale Flag Cleanup",
        description: "Ability to choose custom criteria such as age of flag to determine stale flag definition.",
      },
      {
        tag: [{ value: "RBAC" }],
        title: "Flag-level RBAC",
        description: "Ability to add RBAC to groups of flags so you can control releases in groups.",
      },
      {
        tag: [{ value: "RBAC" }],
        title: "Splitting Create and Edit Roles for RBAC Enhancements",
        description: "Enhancement granularity of RBAC permissions across defined roles and environments.",
      },
      {
        tag: [{ value: "Proxy" }],
        title: "Proxy Re-architecutre for Scalability Improvements",
        description: "Redesign of proxy architecture for new level of resilience.",
      },
      {
        tag: [{ value: "Platform Integration" }],
        title: "Cost Impact of a Feature Change",
        description: "Ability to see cost impact of a feature change and relate it to a cloud cost issue.",
      },
      {
        tag: [{ value: "Target Group Enhancements" }],
        title: "Extend Operator Support",
        description: "New operator support to help with complex rules, conditions and clauses on targets.",
      },
    ],
  },
  Next: {
    description: "What is being developed next",
    feature: [
      {
        tag: [{ value: "Experimentation" }],
        title: "A/B Testing",
        description: "Improved A/B testing framework for segmenting tests between targets.",
      },
      {
        tag: [{ value: "Pipelines" }],
        title: "Pipeline Templates",
        description: "Out of the box pipeline templates to easily setup automated workflows.",
      },
      {
        tag: [{ value: "Onboarding" }],
        title: "Improved Time to Value of Onboarding",
        description: "Reducing friction of setting up SDKs and Keys so your teams can start flagging within minutes.",
      },
      {
        tag: [{ value: "Git Experience" }],
        title: "Git Experience 2.0",
        description: "Increase the speed of our git sync across repos and general improvements for development teams to work together.",
      },
    ],
  },
  Later: {
    description: "What is being developed later",
    feature: [
      {
        tag: [{ value: "SDKs" }],
        title: "SDK Troubleshooting with AIDA",
        description: "Use AIDA to help you diagnose SDK issues and improvements in your code.",
      },
      {
        tag: [{ value: "OpenSource" }],
        title: "OpenFeature SDK Support",
        description: "Besides GoLang OpenFeature SDK support we will build out more language support based on requests from our community.",
      },
      {
        tag: [{ value: "OpenSource" }],
        title: "Gitness + Feature Flags",
        description: "Add boolean flags to Gitness to improve how our community develops and improves their experience.",
      },
    ],
  },
  Released: {
    description: "What has been released",
    feature: [
      {
        tag: [{ value: "Lifecycle Management" }],
        title: "Automated Stale Flag Removal",
        description: "Ability to automatically identify stale flags and remove directly from your code base.",
      },
      {
        tag: [{ value: "Pipelines" }],
        title: "Expressions in Pipelines",
        description: "Ability to use expressions in feature flag pipelines for dynamic changes.",
      },
      {
        tag: [{ value: "Target Management" }],
        title: "Flag Tag Management",
        description: "Ability to add a tag to a group of flags. Customers are using this to show services grouped together, team ownership, or business events related to a feature flag.",
      },
    ],
  },
};
