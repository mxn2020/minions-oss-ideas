/**
 * Minions Oss-ideas SDK
 *
 * Idea brainstorms, feasibility scores, tech stack picks, and market gaps
 *
 * @module @minions-oss-ideas/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Oss-ideas.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
