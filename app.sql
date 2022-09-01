-- CREATE DATABASE
CREATE DATABASE modulo_clean_arch;

-- CREATE TABLES
CREATE TABLE FACILITY(
  ID VARCHAR(200) NOT NULL,
  IS_OPEN BOOLEAN,
  NAME VARCHAR(200),
  PRIMARY KEY(ID)
)

CREATE TABLE ORDERS(
  ID VARCHAR(200) NOT NULL,
  FACILITY_ID VARCHAR(200) NOT NULL,
  TOTAL DECIMAL,
  CREATED_AT DATE,
  DOCUMENT VARCHAR(50),
  IS_OUT_DELIVERY BOOLEAN,
  PRIMARY KEY(ID),
  FOREIGN KEY(FACILITY_ID) REFERENCES FACILITY(ID)
)

INSERT INTO FACILITY(ID, NAME, IS_OPEN) VALUES('d13214ef-80ec-460b-81b3-7bd6cbbf2905', 'BATATINHA FRITA', TRUE);
INSERT INTO FACILITY(ID, NAME, IS_OPEN) VALUES('f0ffe30e-24e6-11ed-861d-0242ac120002', 'BISTRO TECH', FALSE);



