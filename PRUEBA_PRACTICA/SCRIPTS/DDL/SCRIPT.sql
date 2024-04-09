toc.dat                                                                                             0000600 0004000 0002000 00000017625 14605316515 0014460 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP   8    7        	        |         	   DBEntrega    16.2    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         �           1262    16664 	   DBEntrega    DATABASE     �   CREATE DATABASE "DBEntrega" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Ecuador.1252';
    DROP DATABASE "DBEntrega";
                postgres    false         �            1259    16666    paquetes    TABLE       CREATE TABLE public.paquetes (
    id bigint NOT NULL,
    destino character varying(255),
    estado character varying(255),
    etiqueta character varying(255),
    informacion_emisor character varying(255),
    informacion_receptor character varying(255),
    peso double precision,
    id_repartidor character varying(20),
    CONSTRAINT paquetes_estado_check CHECK (((estado)::text = ANY ((ARRAY['EN_TRANSITO'::character varying, 'ENTREGADO'::character varying, 'PENDIENTE'::character varying])::text[])))
);
    DROP TABLE public.paquetes;
       public         heap    postgres    false         �            1259    16665    paquetes_id_seq    SEQUENCE     x   CREATE SEQUENCE public.paquetes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.paquetes_id_seq;
       public          postgres    false    216         �           0    0    paquetes_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.paquetes_id_seq OWNED BY public.paquetes.id;
          public          postgres    false    215         �            1259    16676    rutas_entrega    TABLE     �   CREATE TABLE public.rutas_entrega (
    id bigint NOT NULL,
    nombre_ruta character varying(255),
    id_repartidor character varying(20)
);
 !   DROP TABLE public.rutas_entrega;
       public         heap    postgres    false         �            1259    16675    rutas_entrega_id_seq    SEQUENCE     }   CREATE SEQUENCE public.rutas_entrega_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.rutas_entrega_id_seq;
       public          postgres    false    218         �           0    0    rutas_entrega_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.rutas_entrega_id_seq OWNED BY public.rutas_entrega.id;
          public          postgres    false    217         �            1259    16682 	   user_role    TABLE     �   CREATE TABLE public.user_role (
    role character varying(50) NOT NULL,
    username character varying(20) NOT NULL,
    granted_date timestamp(6) without time zone NOT NULL
);
    DROP TABLE public.user_role;
       public         heap    postgres    false         �            1259    16687    users    TABLE     �   CREATE TABLE public.users (
    username character varying(20) NOT NULL,
    disabled boolean NOT NULL,
    email character varying(50),
    image character varying(255),
    locked boolean NOT NULL,
    password character varying(200) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false         '           2604    16669    paquetes id    DEFAULT     j   ALTER TABLE ONLY public.paquetes ALTER COLUMN id SET DEFAULT nextval('public.paquetes_id_seq'::regclass);
 :   ALTER TABLE public.paquetes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216         (           2604    16679    rutas_entrega id    DEFAULT     t   ALTER TABLE ONLY public.rutas_entrega ALTER COLUMN id SET DEFAULT nextval('public.rutas_entrega_id_seq'::regclass);
 ?   ALTER TABLE public.rutas_entrega ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218         �          0    16666    paquetes 
   TABLE DATA           �   COPY public.paquetes (id, destino, estado, etiqueta, informacion_emisor, informacion_receptor, peso, id_repartidor) FROM stdin;
    public          postgres    false    216       4805.dat �          0    16676    rutas_entrega 
   TABLE DATA           G   COPY public.rutas_entrega (id, nombre_ruta, id_repartidor) FROM stdin;
    public          postgres    false    218       4807.dat �          0    16682 	   user_role 
   TABLE DATA           A   COPY public.user_role (role, username, granted_date) FROM stdin;
    public          postgres    false    219       4808.dat �          0    16687    users 
   TABLE DATA           S   COPY public.users (username, disabled, email, image, locked, password) FROM stdin;
    public          postgres    false    220       4809.dat �           0    0    paquetes_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.paquetes_id_seq', 2, true);
          public          postgres    false    215         �           0    0    rutas_entrega_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.rutas_entrega_id_seq', 2, true);
          public          postgres    false    217         +           2606    16674    paquetes paquetes_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.paquetes
    ADD CONSTRAINT paquetes_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.paquetes DROP CONSTRAINT paquetes_pkey;
       public            postgres    false    216         -           2606    16681     rutas_entrega rutas_entrega_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.rutas_entrega
    ADD CONSTRAINT rutas_entrega_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.rutas_entrega DROP CONSTRAINT rutas_entrega_pkey;
       public            postgres    false    218         /           2606    16686    user_role user_role_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT user_role_pkey PRIMARY KEY (role, username);
 B   ALTER TABLE ONLY public.user_role DROP CONSTRAINT user_role_pkey;
       public            postgres    false    219    219         1           2606    16693    users users_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    220         4           2606    16704 %   user_role fk2svos04wv92op6gs17m9omli1    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT fk2svos04wv92op6gs17m9omli1 FOREIGN KEY (username) REFERENCES public.users(username);
 O   ALTER TABLE ONLY public.user_role DROP CONSTRAINT fk2svos04wv92op6gs17m9omli1;
       public          postgres    false    220    4657    219         2           2606    16694 $   paquetes fkavmoakfytsf52l4siyxrvy4w1    FK CONSTRAINT     �   ALTER TABLE ONLY public.paquetes
    ADD CONSTRAINT fkavmoakfytsf52l4siyxrvy4w1 FOREIGN KEY (id_repartidor) REFERENCES public.users(username);
 N   ALTER TABLE ONLY public.paquetes DROP CONSTRAINT fkavmoakfytsf52l4siyxrvy4w1;
       public          postgres    false    216    4657    220         3           2606    16699 )   rutas_entrega fkbxgqq0gjq25ukoljqp3q3501g    FK CONSTRAINT     �   ALTER TABLE ONLY public.rutas_entrega
    ADD CONSTRAINT fkbxgqq0gjq25ukoljqp3q3501g FOREIGN KEY (id_repartidor) REFERENCES public.users(username);
 S   ALTER TABLE ONLY public.rutas_entrega DROP CONSTRAINT fkbxgqq0gjq25ukoljqp3q3501g;
       public          postgres    false    220    4657    218                                                                                                                   4805.dat                                                                                            0000600 0004000 0002000 00000000200 14605316515 0014250 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        2	Calle Larga	ENTREGADO	fragil	Juan Perez	Luis Mejia	21	\N
1	Calle Larga	EN_TRANSITO	Documento	Juan Perez	Luis Mejia	23	\N
\.


                                                                                                                                                                                                                                                                                                                                                                                                4807.dat                                                                                            0000600 0004000 0002000 00000000027 14605316515 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	sas	\N
2	sas	\N
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         4808.dat                                                                                            0000600 0004000 0002000 00000000215 14605316515 0014261 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        SECRETARIA	maria	2024-04-09 13:41:06.890829
REPARTIDOR	matias	2024-04-09 13:54:56.667485
ADMINISTRADOR	jairo	2024-04-09 14:18:21.905278
\.


                                                                                                                                                                                                                                                                                                                                                                                   4809.dat                                                                                            0000600 0004000 0002000 00000000623 14605316515 0014265 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        maria	f	joisialexandra@gmail.com	https://i.imgur.com/LDOO4Qs.jpg	f	$2a$10$.UoKm81L38XE1/J9gXENne5DvbDU9z0.EM6nqpY6ctMRZnDijOzkG
matias	f	matias@gmail.com	https://robohash.org/Terry.png?set=set4	f	$2a$10$Kr/LSprybp1N240iH0pHROoep8KioLwCREvWisE8rlGHvy8Rpgtye
jairo	f	jeremycarvajal.2003@gmail.com	https://robohash.org/Terry.png?set=set4	f	$2a$10$iqgeIZY6/8XcbXqOEjHxUuzZ7K3gRuX./mAaNGAgVuqL8eLH3uVha
\.


                                                                                                             restore.sql                                                                                         0000600 0004000 0002000 00000015664 14605316515 0015406 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "DBEntrega";
--
-- Name: DBEntrega; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "DBEntrega" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Ecuador.1252';


ALTER DATABASE "DBEntrega" OWNER TO postgres;

\connect "DBEntrega"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: paquetes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.paquetes (
    id bigint NOT NULL,
    destino character varying(255),
    estado character varying(255),
    etiqueta character varying(255),
    informacion_emisor character varying(255),
    informacion_receptor character varying(255),
    peso double precision,
    id_repartidor character varying(20),
    CONSTRAINT paquetes_estado_check CHECK (((estado)::text = ANY ((ARRAY['EN_TRANSITO'::character varying, 'ENTREGADO'::character varying, 'PENDIENTE'::character varying])::text[])))
);


ALTER TABLE public.paquetes OWNER TO postgres;

--
-- Name: paquetes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.paquetes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.paquetes_id_seq OWNER TO postgres;

--
-- Name: paquetes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.paquetes_id_seq OWNED BY public.paquetes.id;


--
-- Name: rutas_entrega; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rutas_entrega (
    id bigint NOT NULL,
    nombre_ruta character varying(255),
    id_repartidor character varying(20)
);


ALTER TABLE public.rutas_entrega OWNER TO postgres;

--
-- Name: rutas_entrega_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rutas_entrega_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rutas_entrega_id_seq OWNER TO postgres;

--
-- Name: rutas_entrega_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rutas_entrega_id_seq OWNED BY public.rutas_entrega.id;


--
-- Name: user_role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_role (
    role character varying(50) NOT NULL,
    username character varying(20) NOT NULL,
    granted_date timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.user_role OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    username character varying(20) NOT NULL,
    disabled boolean NOT NULL,
    email character varying(50),
    image character varying(255),
    locked boolean NOT NULL,
    password character varying(200) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: paquetes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paquetes ALTER COLUMN id SET DEFAULT nextval('public.paquetes_id_seq'::regclass);


--
-- Name: rutas_entrega id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rutas_entrega ALTER COLUMN id SET DEFAULT nextval('public.rutas_entrega_id_seq'::regclass);


--
-- Data for Name: paquetes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.paquetes (id, destino, estado, etiqueta, informacion_emisor, informacion_receptor, peso, id_repartidor) FROM stdin;
\.
COPY public.paquetes (id, destino, estado, etiqueta, informacion_emisor, informacion_receptor, peso, id_repartidor) FROM '$$PATH$$/4805.dat';

--
-- Data for Name: rutas_entrega; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rutas_entrega (id, nombre_ruta, id_repartidor) FROM stdin;
\.
COPY public.rutas_entrega (id, nombre_ruta, id_repartidor) FROM '$$PATH$$/4807.dat';

--
-- Data for Name: user_role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_role (role, username, granted_date) FROM stdin;
\.
COPY public.user_role (role, username, granted_date) FROM '$$PATH$$/4808.dat';

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (username, disabled, email, image, locked, password) FROM stdin;
\.
COPY public.users (username, disabled, email, image, locked, password) FROM '$$PATH$$/4809.dat';

--
-- Name: paquetes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.paquetes_id_seq', 2, true);


--
-- Name: rutas_entrega_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rutas_entrega_id_seq', 2, true);


--
-- Name: paquetes paquetes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paquetes
    ADD CONSTRAINT paquetes_pkey PRIMARY KEY (id);


--
-- Name: rutas_entrega rutas_entrega_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rutas_entrega
    ADD CONSTRAINT rutas_entrega_pkey PRIMARY KEY (id);


--
-- Name: user_role user_role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT user_role_pkey PRIMARY KEY (role, username);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);


--
-- Name: user_role fk2svos04wv92op6gs17m9omli1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT fk2svos04wv92op6gs17m9omli1 FOREIGN KEY (username) REFERENCES public.users(username);


--
-- Name: paquetes fkavmoakfytsf52l4siyxrvy4w1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.paquetes
    ADD CONSTRAINT fkavmoakfytsf52l4siyxrvy4w1 FOREIGN KEY (id_repartidor) REFERENCES public.users(username);


--
-- Name: rutas_entrega fkbxgqq0gjq25ukoljqp3q3501g; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rutas_entrega
    ADD CONSTRAINT fkbxgqq0gjq25ukoljqp3q3501g FOREIGN KEY (id_repartidor) REFERENCES public.users(username);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            