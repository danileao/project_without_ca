CREATE DATABASE modulo_clean_arch;

CREATE TABLE FACILITY(
  ID VARCHAR(200) NOT NULL,
  IS_OPEN BOOLEAN,
  NAME VARCHAR(200),
  PRIMARY KEY(ID)

);
CREATE TABLE ORDERS(
  ID VARCHAR(200) NOT NULL,
  FACILITY_ID VARCHAR(200) NOT NULL,
  TOTAL DECIMAL,
  CREATED_AT DATE,
  DOCUMENT VARCHAR(50),
  IS_OUT_DELIVERY BOOLEAN,
  PRIMARY KEY(ID),
  FOREIGN KEY(FACILITY_ID) REFERENCES FACILITY(ID)
);


