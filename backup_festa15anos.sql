--
-- PostgreSQL database dump
--

\restrict K2RtnXafmsWHeV6NKOffyNaqUhkxrRaHhe7JpOxgowbzLLIhJASbmyjk3hjNnOO

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- Name: Admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Admin" (
    id integer NOT NULL,
    nome text NOT NULL,
    email text NOT NULL,
    senha text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Admin" OWNER TO postgres;

--
-- Name: Admin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Admin_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Admin_id_seq" OWNER TO postgres;

--
-- Name: Admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Admin_id_seq" OWNED BY public."Admin".id;


--
-- Name: Convidado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Convidado" (
    id integer NOT NULL,
    nome text NOT NULL,
    confirmado boolean,
    "respondidoEm" timestamp(3) without time zone,
    "familiaId" integer NOT NULL
);


ALTER TABLE public."Convidado" OWNER TO postgres;

--
-- Name: Convidado_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Convidado_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Convidado_id_seq" OWNER TO postgres;

--
-- Name: Convidado_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Convidado_id_seq" OWNED BY public."Convidado".id;


--
-- Name: Familia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Familia" (
    id integer NOT NULL,
    nome text NOT NULL,
    senha text NOT NULL,
    confirmou boolean DEFAULT false NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Familia" OWNER TO postgres;

--
-- Name: Familia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Familia_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Familia_id_seq" OWNER TO postgres;

--
-- Name: Familia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Familia_id_seq" OWNED BY public."Familia".id;


--
-- Name: Foto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Foto" (
    id integer NOT NULL,
    titulo text NOT NULL,
    imagem text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Foto" OWNER TO postgres;

--
-- Name: Foto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Foto_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Foto_id_seq" OWNER TO postgres;

--
-- Name: Foto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Foto_id_seq" OWNED BY public."Foto".id;


--
-- Name: Mensagem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Mensagem" (
    id integer NOT NULL,
    nome text NOT NULL,
    texto text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Mensagem" OWNER TO postgres;

--
-- Name: Mensagem_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Mensagem_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Mensagem_id_seq" OWNER TO postgres;

--
-- Name: Mensagem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Mensagem_id_seq" OWNED BY public."Mensagem".id;


--
-- Name: Presente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Presente" (
    id integer NOT NULL,
    nome text NOT NULL,
    imagem text NOT NULL,
    "linkLoja" text NOT NULL,
    reservado boolean DEFAULT false NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    reservador text,
    tamanho text
);


ALTER TABLE public."Presente" OWNER TO postgres;

--
-- Name: Presente_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Presente_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Presente_id_seq" OWNER TO postgres;

--
-- Name: Presente_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Presente_id_seq" OWNED BY public."Presente".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Admin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admin" ALTER COLUMN id SET DEFAULT nextval('public."Admin_id_seq"'::regclass);


--
-- Name: Convidado id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Convidado" ALTER COLUMN id SET DEFAULT nextval('public."Convidado_id_seq"'::regclass);


--
-- Name: Familia id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Familia" ALTER COLUMN id SET DEFAULT nextval('public."Familia_id_seq"'::regclass);


--
-- Name: Foto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Foto" ALTER COLUMN id SET DEFAULT nextval('public."Foto_id_seq"'::regclass);


--
-- Name: Mensagem id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mensagem" ALTER COLUMN id SET DEFAULT nextval('public."Mensagem_id_seq"'::regclass);


--
-- Name: Presente id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Presente" ALTER COLUMN id SET DEFAULT nextval('public."Presente_id_seq"'::regclass);


--
-- Data for Name: Admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Admin" (id, nome, email, senha, "createdAt") FROM stdin;
1	Andreia	admin@festa.com	$2b$10$/e/u/kwVqzPZgjbPBEwnIunLO6EOBorvuOHEiYa/jFZHFLqfU7BSm	2026-07-28 19:27:57.909
\.


--
-- Data for Name: Convidado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Convidado" (id, nome, confirmado, "respondidoEm", "familiaId") FROM stdin;
9	sai	f	2026-07-29 13:21:57.032	5
10	tra	f	2026-07-29 13:21:57.181	5
12	der	f	2026-07-29 13:21:57.187	5
11	fer	f	2026-07-29 13:21:57.218	5
8	mel	t	2026-07-30 01:12:35.09	4
7	ana	t	2026-07-30 01:12:35.224	4
\.


--
-- Data for Name: Familia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Familia" (id, nome, senha, confirmou, "createdAt") FROM stdin;
4	lima	231	f	2026-07-27 23:35:10.856
5	pereira	345	f	2026-07-29 13:20:24.992
\.


--
-- Data for Name: Foto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Foto" (id, titulo, imagem, "createdAt") FROM stdin;
5	as	https://res.cloudinary.com/mmnsb83s/image/upload/v1785370421/fotos/nkuvzkx9y4wcygyvgnxn.jpg	2026-07-30 00:13:40.996
6	as	https://res.cloudinary.com/mmnsb83s/image/upload/v1785371522/fotos/pc6dqa5vf9yxavmiggkz.jpg	2026-07-30 00:32:01.834
\.


--
-- Data for Name: Mensagem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Mensagem" (id, nome, texto, "createdAt") FROM stdin;
4	lima	asdf	2026-07-29 12:41:09.956
5	bel	parabens	2026-07-29 13:18:02.261
6	lima	assadf	2026-07-29 13:27:48.543
\.


--
-- Data for Name: Presente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Presente" (id, nome, imagem, "linkLoja", reservado, "createdAt", reservador, tamanho) FROM stdin;
16	batom	https://res.cloudinary.com/mmnsb83s/image/upload/v1785355321/presentes/qnnaeu7xvik03pjgvkr7.jpg	https://shopee.com.br/Vestido-Feminino-De-Tule-Longo-Elegante-Con-fenda-Lateral-costa-Aberta-i.1402118802.58253803313?xptdk=7dc0b522-f00c-4fc6-bc98-635069209d33	t	2026-07-29 20:02:02.156	ade	
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
a8b500e5-cf99-495b-87cd-251ef9723529	83c0115e736de5ff34bda9d3ab5ddf1f0a58e494fd0bdfbd11ef44f3bf2e8ff6	2026-07-08 13:01:43.933125-03	20260708160143_init	\N	\N	2026-07-08 13:01:43.772836-03	1
9be9bffa-63d2-4380-b4ab-14c369be78f3	9a7bcd7dcc706a17d4ded0af5e5b43d313713afce4d2ebd5bd111c4853e2c616	2026-07-11 18:45:21.596012-03	20260711214521_update_models	\N	\N	2026-07-11 18:45:21.544034-03	1
cc13a59e-58ec-4e02-97cd-03ca85261681	501e0708e41e00c6720fd5c20e85ed38c11f9cc77b841227d45ff179557587b6	2026-07-26 20:01:00.994447-03	20260726230100_add_presente_tamanho	\N	\N	2026-07-26 20:01:00.959679-03	1
\.


--
-- Name: Admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Admin_id_seq"', 1, true);


--
-- Name: Convidado_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Convidado_id_seq"', 13, true);


--
-- Name: Familia_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Familia_id_seq"', 6, true);


--
-- Name: Foto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Foto_id_seq"', 6, true);


--
-- Name: Mensagem_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Mensagem_id_seq"', 6, true);


--
-- Name: Presente_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Presente_id_seq"', 16, true);


--
-- Name: Admin Admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Admin"
    ADD CONSTRAINT "Admin_pkey" PRIMARY KEY (id);


--
-- Name: Convidado Convidado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Convidado"
    ADD CONSTRAINT "Convidado_pkey" PRIMARY KEY (id);


--
-- Name: Familia Familia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Familia"
    ADD CONSTRAINT "Familia_pkey" PRIMARY KEY (id);


--
-- Name: Foto Foto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Foto"
    ADD CONSTRAINT "Foto_pkey" PRIMARY KEY (id);


--
-- Name: Mensagem Mensagem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Mensagem"
    ADD CONSTRAINT "Mensagem_pkey" PRIMARY KEY (id);


--
-- Name: Presente Presente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Presente"
    ADD CONSTRAINT "Presente_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Admin_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Admin_email_key" ON public."Admin" USING btree (email);


--
-- Name: Convidado Convidado_familiaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Convidado"
    ADD CONSTRAINT "Convidado_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES public."Familia"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict K2RtnXafmsWHeV6NKOffyNaqUhkxrRaHhe7JpOxgowbzLLIhJASbmyjk3hjNnOO

