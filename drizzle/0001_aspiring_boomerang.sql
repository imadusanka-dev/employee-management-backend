ALTER TABLE "employee" ADD COLUMN "nic" varchar(15) NOT NULL;--> statement-breakpoint
ALTER TABLE "employee" ADD CONSTRAINT "employee_nic_unique" UNIQUE("nic");--> statement-breakpoint
ALTER TABLE "employee" ADD CONSTRAINT "employee_email_unique" UNIQUE("email");