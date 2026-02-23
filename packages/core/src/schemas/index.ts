/**
 * @module @minions-oss-ideas/sdk/schemas
 * Custom MinionType schemas for Minions Oss-ideas.
 */

import type { MinionType } from 'minions-sdk';

export const ossideaType: MinionType = {
  id: 'oss-ideas-oss-idea',
  name: 'Oss idea',
  slug: 'oss-idea',
  description: 'A brainstormed open-source project idea.',
  icon: '💡',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'problemStatement', type: 'string', label: 'problemStatement' },
    { name: 'targetAudience', type: 'string', label: 'targetAudience' },
    { name: 'marketGap', type: 'string', label: 'marketGap' },
    { name: 'feasibilityScore', type: 'number', label: 'feasibilityScore' },
    { name: 'noveltyScore', type: 'number', label: 'noveltyScore' },
    { name: 'techStack', type: 'string', label: 'techStack' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const ideaevaluationType: MinionType = {
  id: 'oss-ideas-idea-evaluation',
  name: 'Idea evaluation',
  slug: 'idea-evaluation',
  description: 'A structured evaluation of an OSS idea.',
  icon: '📊',
  schema: [
    { name: 'ideaId', type: 'string', label: 'ideaId' },
    { name: 'criterion', type: 'string', label: 'criterion' },
    { name: 'score', type: 'number', label: 'score' },
    { name: 'reasoning', type: 'string', label: 'reasoning' },
    { name: 'evaluatedBy', type: 'string', label: 'evaluatedBy' },
    { name: 'evaluatedAt', type: 'string', label: 'evaluatedAt' },
  ],
};

export const customTypes: MinionType[] = [
  ossideaType,
  ideaevaluationType,
];

