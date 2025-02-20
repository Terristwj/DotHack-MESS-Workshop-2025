PGDMP  "    8                 }            Palworld    17.2    17.2 (    I           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            J           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            K           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            L           1262    16468    Palworld    DATABASE     �   CREATE DATABASE "Palworld" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Singapore.1252';
    DROP DATABASE "Palworld";
                     postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                     pg_database_owner    false            M           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                        pg_database_owner    false    4            �            1259    16545    Drops    TABLE     �   CREATE TABLE public."Drops" (
    drop_id smallint NOT NULL,
    drop_name text NOT NULL,
    date_created timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public."Drops";
       public         heap r       postgres    false    4            �            1259    16551    Drops_drop_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Drops_drop_id_seq"
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Drops_drop_id_seq";
       public               postgres    false    4    217            N           0    0    Drops_drop_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Drops_drop_id_seq" OWNED BY public."Drops".drop_id;
          public               postgres    false    218            �            1259    16552    Element    TABLE     �   CREATE TABLE public."Element" (
    element_id smallint NOT NULL,
    element_name text NOT NULL,
    element_img text NOT NULL,
    date_created timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public."Element";
       public         heap r       postgres    false    4            �            1259    16558    Element_element_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Element_element_id_seq"
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."Element_element_id_seq";
       public               postgres    false    4    219            O           0    0    Element_element_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."Element_element_id_seq" OWNED BY public."Element".element_id;
          public               postgres    false    220            �            1259    16559 	   Pal_Drops    TABLE     �   CREATE TABLE public."Pal_Drops" (
    pal_drop_id bigint NOT NULL,
    drop_id bigint NOT NULL,
    pal_id bigint NOT NULL,
    date_created timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public."Pal_Drops";
       public         heap r       postgres    false    4            �            1259    16563    Pal_Drops_pal_drop_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Pal_Drops_pal_drop_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."Pal_Drops_pal_drop_id_seq";
       public               postgres    false    4    221            P           0    0    Pal_Drops_pal_drop_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."Pal_Drops_pal_drop_id_seq" OWNED BY public."Pal_Drops".pal_drop_id;
          public               postgres    false    222            �            1259    16564    Pals    TABLE     �  CREATE TABLE public."Pals" (
    pal_id smallint NOT NULL,
    pal_name text NOT NULL,
    pal_nickname text,
    element_id bigint NOT NULL,
    entry_desc text,
    appearance_desc text,
    behaviour_desc text,
    pal_skill_name text NOT NULL,
    pal_skill_desc text,
    pal_menu_img text NOT NULL,
    pal_big_img text NOT NULL,
    date_created time with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public."Pals";
       public         heap r       postgres    false    4            �            1259    16570    Pals_pal_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Pals_pal_id_seq"
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Pals_pal_id_seq";
       public               postgres    false    4    223            Q           0    0    Pals_pal_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Pals_pal_id_seq" OWNED BY public."Pals".pal_id;
          public               postgres    false    224            �           2604    16571    Drops drop_id    DEFAULT     r   ALTER TABLE ONLY public."Drops" ALTER COLUMN drop_id SET DEFAULT nextval('public."Drops_drop_id_seq"'::regclass);
 >   ALTER TABLE public."Drops" ALTER COLUMN drop_id DROP DEFAULT;
       public               postgres    false    218    217            �           2604    16572    Element element_id    DEFAULT     |   ALTER TABLE ONLY public."Element" ALTER COLUMN element_id SET DEFAULT nextval('public."Element_element_id_seq"'::regclass);
 C   ALTER TABLE public."Element" ALTER COLUMN element_id DROP DEFAULT;
       public               postgres    false    220    219            �           2604    16573    Pal_Drops pal_drop_id    DEFAULT     �   ALTER TABLE ONLY public."Pal_Drops" ALTER COLUMN pal_drop_id SET DEFAULT nextval('public."Pal_Drops_pal_drop_id_seq"'::regclass);
 F   ALTER TABLE public."Pal_Drops" ALTER COLUMN pal_drop_id DROP DEFAULT;
       public               postgres    false    222    221            �           2604    16574    Pals pal_id    DEFAULT     n   ALTER TABLE ONLY public."Pals" ALTER COLUMN pal_id SET DEFAULT nextval('public."Pals_pal_id_seq"'::regclass);
 <   ALTER TABLE public."Pals" ALTER COLUMN pal_id DROP DEFAULT;
       public               postgres    false    224    223            ?          0    16545    Drops 
   TABLE DATA           C   COPY public."Drops" (drop_id, drop_name, date_created) FROM stdin;
    public               postgres    false    217   �.       A          0    16552    Element 
   TABLE DATA           X   COPY public."Element" (element_id, element_name, element_img, date_created) FROM stdin;
    public               postgres    false    219   /       C          0    16559 	   Pal_Drops 
   TABLE DATA           Q   COPY public."Pal_Drops" (pal_drop_id, drop_id, pal_id, date_created) FROM stdin;
    public               postgres    false    221   0       E          0    16564    Pals 
   TABLE DATA           �   COPY public."Pals" (pal_id, pal_name, pal_nickname, element_id, entry_desc, appearance_desc, behaviour_desc, pal_skill_name, pal_skill_desc, pal_menu_img, pal_big_img, date_created) FROM stdin;
    public               postgres    false    223   T0       R           0    0    Drops_drop_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Drops_drop_id_seq"', 2, true);
          public               postgres    false    218            S           0    0    Element_element_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."Element_element_id_seq"', 9, true);
          public               postgres    false    220            T           0    0    Pal_Drops_pal_drop_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."Pal_Drops_pal_drop_id_seq"', 2, true);
          public               postgres    false    222            U           0    0    Pals_pal_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Pals_pal_id_seq"', 1, true);
          public               postgres    false    224            �           2606    16576    Drops Drops_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Drops"
    ADD CONSTRAINT "Drops_pkey" PRIMARY KEY (drop_id);
 >   ALTER TABLE ONLY public."Drops" DROP CONSTRAINT "Drops_pkey";
       public                 postgres    false    217            �           2606    16578    Element Element_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Element"
    ADD CONSTRAINT "Element_pkey" PRIMARY KEY (element_id);
 B   ALTER TABLE ONLY public."Element" DROP CONSTRAINT "Element_pkey";
       public                 postgres    false    219            �           2606    16580    Pal_Drops Pal_Drops_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public."Pal_Drops"
    ADD CONSTRAINT "Pal_Drops_pkey" PRIMARY KEY (pal_drop_id);
 F   ALTER TABLE ONLY public."Pal_Drops" DROP CONSTRAINT "Pal_Drops_pkey";
       public                 postgres    false    221            �           2606    16582    Pals Pals_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Pals"
    ADD CONSTRAINT "Pals_pkey" PRIMARY KEY (pal_id);
 <   ALTER TABLE ONLY public."Pals" DROP CONSTRAINT "Pals_pkey";
       public                 postgres    false    223            �           2606    16584    Drops drop_name_duplicate 
   CONSTRAINT     z   ALTER TABLE ONLY public."Drops"
    ADD CONSTRAINT drop_name_duplicate UNIQUE (drop_name) INCLUDE (drop_name) DEFERRABLE;
 E   ALTER TABLE ONLY public."Drops" DROP CONSTRAINT drop_name_duplicate;
       public                 postgres    false    217            �           2606    16587    Pal_Drops pal_drop_duplicate 
   CONSTRAINT     ~   ALTER TABLE ONLY public."Pal_Drops"
    ADD CONSTRAINT pal_drop_duplicate UNIQUE (drop_id, pal_id) INCLUDE (drop_id, pal_id);
 H   ALTER TABLE ONLY public."Pal_Drops" DROP CONSTRAINT pal_drop_duplicate;
       public                 postgres    false    221    221            �           2606    16589    Pals pal_name_duplicate 
   CONSTRAINT     v   ALTER TABLE ONLY public."Pals"
    ADD CONSTRAINT pal_name_duplicate UNIQUE (pal_name) INCLUDE (pal_name) DEFERRABLE;
 C   ALTER TABLE ONLY public."Pals" DROP CONSTRAINT pal_name_duplicate;
       public                 postgres    false    223            �           2606    16591    Pal_Drops drop_id    FK CONSTRAINT     �   ALTER TABLE ONLY public."Pal_Drops"
    ADD CONSTRAINT drop_id FOREIGN KEY (drop_id) REFERENCES public."Drops"(drop_id) NOT VALID;
 =   ALTER TABLE ONLY public."Pal_Drops" DROP CONSTRAINT drop_id;
       public               postgres    false    221    217    4766            �           2606    16596    Pals pal_element    FK CONSTRAINT     �   ALTER TABLE ONLY public."Pals"
    ADD CONSTRAINT pal_element FOREIGN KEY (element_id) REFERENCES public."Element"(element_id) NOT VALID;
 <   ALTER TABLE ONLY public."Pals" DROP CONSTRAINT pal_element;
       public               postgres    false    4770    219    223            �           2606    16601    Pal_Drops pal_id    FK CONSTRAINT        ALTER TABLE ONLY public."Pal_Drops"
    ADD CONSTRAINT pal_id FOREIGN KEY (pal_id) REFERENCES public."Pals"(pal_id) NOT VALID;
 <   ALTER TABLE ONLY public."Pal_Drops" DROP CONSTRAINT pal_id;
       public               postgres    false    221    4776    223            ?   J   x�3�����4202�50�50V02�25�25�3�037�6��2��I�MJ��Q�MM,���B������6F��� 1l;      A   �   x��ұN�0���y
vT��qR's��� ���+��W}}�v���"���u �D�~q�#�	ar�{���|	q>���hW�����3��ŏL�R��I� � �Au�kU��c�+���A����J{���V�V�^�j��[@i�[���i�&Eg
0�����vGZ���|��Z{�N��k��	�8����Œɶﰸ��R���9E�0���z���_�
1D      C   4   x�3�4B##S]C]c#C+SS+#C=CCcm.#N#�jb���� �M      E   p  x��S�n�0='_��3�dK����P`���^�M[�eѓ��׏���C�X"�{|9��X�s����������aA7�<���A"�FH��M��Q��v��Pc3@ˋ/�^68G�`�����H����P@f��#��B�8(�T�U���(WB���(|�٥��q#Am���\(�PsJ<w��cn�1h����&� E1dx�q�{�)`uh��ȴI>B���� �b]¶��R��^�pH�\�Z1�|��~Dc�
=��<�J1c	�v�ɱL!Q5\��A}��FuP�y+���`av��9���K!K���'������PM/�8�0�{���Uh��zQ�c#�A��u��gY��ʭ1Hj��-Fڣ�譠r��
�IT�oh�9a�m]1[����o�}t����\V����e��MPR��R[l׋&{;�I0�}���n�G}�7I�=�(���u+<K�ݽ�H�L
Of;�[���ns��D����=Y=kKϋ�.K��4�(�y#L�3)M�b�d�r����s�<X*=�J�ppmeG� W��p�����������9U�O7���xw>ݝ���|8?�?|��*���_�N�     