---
title: Agent skill
description: Install the Trace CSS skill for your coding agent.
order: 2
---

# Agent skill

The Trace CSS skill helps coding agents choose the right stylesheet, use native HTML and supported extensions, customize theme tokens, and troubleshoot styles.

### Install

Run this command in the project where you use Trace CSS:

```sh
npx skills add tracecss/trace --skill trace-css
```

Select your coding agent when prompted. To install the skill across projects, add `-g`:

```sh
npx skills add tracecss/trace --skill trace-css -g
```

The skill provides instructions for your agent. Install the CSS library separately:

```sh
pnpm add trace-css
```

### Use

Ask your agent to use the Trace CSS skill. For example, in Codex:

```text
Use $trace-css to build a settings form with validation and a theme switch.
```

The current guide describes Trace CSS 0.1.2. It instructs the agent to inspect the installed library before choosing classes and tokens.

### Source and updates

The source lives in [skills/trace-css in the library repository](https://github.com/tracecss/trace/tree/main/skills/trace-css), together with its supporting references.

After installing through the skills CLI, check for updates with:

```sh
npx skills check
npx skills update
```

See the [skills CLI documentation](https://github.com/vercel-labs/skills) for installation options. The installation command requires the skill folder to be published on GitHub.
