CREATE TABLE "department" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "employee" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(50) NOT NULL,
	"last_name" varchar(50) NOT NULL,
	"designation" varchar(50) NOT NULL,
	"dob" date NOT NULL,
	"email" varchar(50) NOT NULL,
	"phone" varchar(10) NOT NULL,
	"department" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
