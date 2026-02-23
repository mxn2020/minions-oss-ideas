"""
Minions Oss-ideas SDK — Type Schemas
Custom MinionType schemas for Minions Oss-ideas.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

oss_idea_type = MinionType(
    id="oss-ideas-oss-idea",
    name="Oss idea",
    slug="oss-idea",
    description="A brainstormed open-source project idea.",
    icon="💡",
    schema=[
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="problemStatement", type="string", label="problemStatement"),
        FieldDefinition(name="targetAudience", type="string", label="targetAudience"),
        FieldDefinition(name="marketGap", type="string", label="marketGap"),
        FieldDefinition(name="feasibilityScore", type="number", label="feasibilityScore"),
        FieldDefinition(name="noveltyScore", type="number", label="noveltyScore"),
        FieldDefinition(name="techStack", type="string", label="techStack"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

idea_evaluation_type = MinionType(
    id="oss-ideas-idea-evaluation",
    name="Idea evaluation",
    slug="idea-evaluation",
    description="A structured evaluation of an OSS idea.",
    icon="📊",
    schema=[
        FieldDefinition(name="ideaId", type="string", label="ideaId"),
        FieldDefinition(name="criterion", type="string", label="criterion"),
        FieldDefinition(name="score", type="number", label="score"),
        FieldDefinition(name="reasoning", type="string", label="reasoning"),
        FieldDefinition(name="evaluatedBy", type="string", label="evaluatedBy"),
        FieldDefinition(name="evaluatedAt", type="string", label="evaluatedAt"),
    ],
)

custom_types: list[MinionType] = [
    oss_idea_type,
    idea_evaluation_type,
]

