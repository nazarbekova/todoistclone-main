CREATE TABLE IF NOT EXISTS "todo1" (
	"id" integer PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"done" boolean DEFAULT false NOT NULL
);
