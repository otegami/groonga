SUBDIRS =					\
	suggest

NONEXISTENT_CXX_SOURCE = nonexistent.cpp

bin_PROGRAMS = groonga
noinst_PROGRAMS =
if WITH_MRUBY
bin_PROGRAMS += grndb
noinst_PROGRAMS += groonga-mruby
endif

EXTRA_DIST =					\
	CMakeLists.txt

AM_CFLAGS =					\
	$(NO_STRICT_ALIASING_CFLAGS)		\
	$(COVERAGE_CFLAGS)			\
	$(GRN_CFLAGS)				\
	$(MESSAGE_PACK_CFLAGS)			\
	$(MRUBY_CFLAGS)                         \
	$(LUAJIT_CFLAGS)

AM_CPPFLAGS =					\
	$(MRUBY_CPPFLAGS)

DEFS += $(GRN_DEFS)

AM_LDFLAGS = -no-undefined

DEFAULT_INCLUDES =				\
	-I$(top_builddir)			\
	-I$(top_builddir)/include		\
	-I$(top_srcdir)/include			\
	-I$(top_srcdir)/lib			\
	$(GROONGA_INCLUDEDIR)

include groonga_sources.am
nodist_EXTRA_groonga_SOURCES = $(NONEXISTENT_CXX_SOURCE)
groonga_CFLAGS = $(AM_CFLAGS) $(LIBEDIT_CFLAGS)
groonga_LDADD =					\
	$(top_builddir)/lib/libgroonga.la	\
	$(LIBEDIT_LIBS)				\
	$(MESSAGE_PACK_LIBS)

include grndb_sources.am
nodist_EXTRA_grndb_SOURCES = $(NONEXISTENT_CXX_SOURCE)
grndb_LDADD =					\
	$(top_builddir)/lib/libgroonga.la	\
	$(MESSAGE_PACK_LIBS)

include groonga_mruby_sources.am
nodist_EXTRA_groonga_mruby_SOURCES = $(NONEXISTENT_CXX_SOURCE)
groonga_mruby_LDADD =				\
	$(top_builddir)/lib/libgroonga.la	\
	$(MESSAGE_PACK_LIBS)
