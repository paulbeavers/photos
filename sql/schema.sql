

CREATE DATABASE photosdb;

\c photosdb

CREATE TABLE photos_users (
	    user_email text NOT NULL,
	    password text NOT NULL
);

CREATE UNIQUE INDEX photos_users_index ON photos_users (user_email);

CREATE TABLE photos_tenants (tenant_name text NOT NULL,
	active_flag SMALLINT NOT NULL, 
	create_time TIMESTAMPTZ NOT NULL DEFAULT NOW() );

CREATE UNIQUE INDEX photos_tenants_index on photos_tenants (tenant_name);

CREATE TABLE photos_tenant_users (tenant_name text NOT NULL, user_email text NOT NULL, tenant_role text NOT NULL);

CREATE UNIQUE INDEX photos_tenant_users_index on photos_tenant_users (tenant_name, user_email);

CREATE user photos_user with password 'photospw';

GRANT all on photos_users to photos_user;
GRANT all on photos_tenants to photos_user;
GRANT all on photos_tenant_users to photos_user;

INSERT into photos_users (user_email, password) 
	VALUES ('master@photos.io', 'photospw');

INSERT into photos_tenants (tenant_name, active_flag) VALUES ('photos.io', 1);

INSERT into photos_tenant_users (tenant_name, user_email, tenant_role)
	VALUES ('photos.io', 'master@photos.io', 'ADMIN'); 

CREATE TABLE photos_heartbeat (tenant_name text NOT NULL,
        hostname text NOT NULL,
        uuid text NOT NULL,
        message text NOT NULL,
        systemtime text NOT NULL,
        create_time TIMESTAMPTZ NOT NULL DEFAULT NOW() );

GRANT all on photos_heartbeat to photos_user;


