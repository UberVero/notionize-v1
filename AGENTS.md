<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Writing for human readers

Applies to everything a person will read: chat replies, docs, PR titles and descriptions, commit messages, issues. Full guidance, examples and a review checklist: `.claude/skills/readable-text/SKILL.md` — read it before writing docs, PR descriptions or any long summary.

For any set of parallel items (bullets, headings, table rows, titles):

1. **Start each item with its subject or its verb.** Drop a subject every item shares. Use the tense the reader expects: past for finished work, continuous for work in progress, imperative for work to do.
2. **Put the distinguishing words first.** Readers often see only the first two words of an item.
3. **Use one structure and one word per concept** across the whole set.
4. **Vary only when the difference means something.** Give every item the same components and a similar length.
5. **Pick verbs that show whether the news is good or bad.**

Repo conventions, templates and brand voice guidelines win where they conflict. Source: [Five Principles for Generating Readable AI Text in Bulk](https://fsdatalab.github.io/blog/agent-text-at-scale/).
