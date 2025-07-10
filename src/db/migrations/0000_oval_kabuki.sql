CREATE TABLE "romms" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
