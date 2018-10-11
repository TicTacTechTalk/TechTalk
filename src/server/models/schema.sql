-- SQL schema

CREATE TABLE "events" (
	"eventid" serial NOT NULL,
	"name" varchar NOT NULL,
	"location" varchar NOT NULL,
	"time" varchar NOT NULL,
	CONSTRAINT events_pk PRIMARY KEY ("eventid")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user" (
	"userid" serial NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY ("userid")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "userevent" (
	"userid" integer NOT NULL,
	"eventid" integer NOT NULL,
	"eventuserid" serial NOT NULL,
	CONSTRAINT userevent_pk PRIMARY KEY ("eventuserid")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "userevent" ADD CONSTRAINT "userevent_fk0" FOREIGN KEY ("userid") REFERENCES "user"("userid");
ALTER TABLE "userevent" ADD CONSTRAINT "userevent_fk1" FOREIGN KEY ("eventid") REFERENCES "events"("eventid");
