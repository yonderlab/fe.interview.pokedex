# Pokemon Team Builder

Welcome to the team! Your challenge is to shape and build a web app that helps people create Pokemon teams and understand what those teams are capable of.

This repository is a starting point, not a specification. We care about the product decisions you make as much as the code you write.

## The Product Challenge

A successful experience should let someone:

- Find and select Pokemon for a team.
- Create and manage multiple distinct teams over time.
- Add and remove team members while understanding the effect of each change.
- Understand a team's combined base stats, including HP, attack, defense, special attack, special defense, and speed.
- See which Pokemon types are represented across the team.

A team should feel like more than a list of names. Beyond these core outcomes, decide which strengths, gaps, or patterns would be useful to surface.

How you turn the outcomes into a useful product is up to you. Decide what information matters, how people move through the experience, and which problems deserve the most attention.

## Product Considerations

These are questions to consider, not a feature checklist:

- How does someone find the right Pokemon without the experience feeling like a catalog?
- How do they create, identify, switch between, and update their teams?
- How should team-level stats and type composition be presented so they are meaningful rather than just numbers?
- What feedback helps someone understand the effect of adding or removing a Pokemon?
- What should happen when a team is empty, incomplete, unusually large, or contains the same Pokemon more than once?
- Which choices should persist when someone returns?
- What details make the experience feel responsive, accessible, and complete?

Make reasonable assumptions and prioritize. You are welcome to improve the interface, information architecture, data model, and technical foundations wherever they support your product direction.

## Technical Starting Point

The project uses React, React Router, TypeScript, and Tailwind CSS. It includes helper functions for interacting with the PokeAPI in `app/services`.

Install the dependencies and start the local development server:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Share Your Thinking

When you finish, briefly explain:

- The user needs you prioritized and why.
- The product and technical decisions you made.
- The assumptions and tradeoffs that shaped the result.
- What you would explore next with more time or user feedback.
