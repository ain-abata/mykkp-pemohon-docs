import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {

  docSidebar: [
    //Pendaftaran Pengguna
    {
      type: 'doc',
      label: 'Pendaftaran Pengguna',
      id: 'pendaftaran/pendaftaran',

    },
    // Orang Kompeten
    {
      type: 'category',
      label: 'Pendaftaran Orang Kompeten',
      link: {
        type: 'doc',
        id: 'orang-kompeten/orang-kompeten',
      },
      items: [
        {
          type: 'doc',
          id: 'orang-kompeten/ods/ods-gred1',
          label: 'ODS Gred 1',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/ods/ods-gred2',
          label: 'ODS Gred 2',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/higien-2/higien-2-daftar',
          label: 'JHII Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/agtes/agtes-daftar',
          label: 'AGTES Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/agtes/agtes-renewal',
          label: 'AGTES Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/higien-1/higien-1-daftar',
          label: 'Juruteknik Higien 1 Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/higien-1/higien-1-renewal',
          label: 'Juruteknik Higien 1 Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/higien-2/higien-2-daftar',
          label: 'Juruteknik Higien 2 Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/higien-2/higien-2-renewal',
          label: 'Juruteknik Higien 2 Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/kualiti-udara/kualiti-udara-daftar',
          label: 'Kualiti Udara Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/kualiti-udara/kualiti-udara-renewal',
          label: 'Kualiti Udara Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/pengapit/pengapit-daftar',
          label: 'Pengapit Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/pengapit/pengapit-renewal',
          label: 'Pengapit Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/kren/kren-menara-daftar',
          label: 'Kren Menara Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/kren/kren-menara-renewal',
          label: 'Kren Menara Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/kren/kren-bergerakberoda-daftar',
          label: 'Kren Bergerak Beroda Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/kren/kren-bergerakberoda-renewal',
          label: 'Kren Bergerak Beroda Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/kren/kren-bergerakberantai-daftar',
          label: 'Kren Bergerak Berantai Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/kren/kren-bergerakberantai-renewal',
          label: 'Kren Bergerak Berantai Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/major-hazard/major-hazard-daftar',
          label: 'Major Hazard Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/major-hazard/major-hazard-renewal',
          label: 'Major Hazard Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/keselamatan-kesihatan/keselamatan-kesihatan-daftar',
          label: 'Pegawai Keselamatan & Kesihatan Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/keselamatan-kesihatan/keselamatan-kesihatan-renewal',
          label: 'Pegawai Keselamatan & Kesihatan Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/keselamatan-tapak/keselamatan-tapak-daftar',
          label: 'Penyelia Keselamatan Tapak Bina Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/keselamatan-tapak/keselamatan-tapak-renewal',
          label: 'Penyelia Keselamatan Tapak Bina Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/doktor-kesihatan/doktor-kesihatan-daftar',
          label: 'Doktor Kesihatan Pekerjaan Pendaftaran',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/doktor-kesihatan/doktor-kesihatan-renewal',
          label: 'Doktor Kesihatan Pekerjaan Pembaharuan',
          className: 'hideItem',
        },

        {
          type: 'doc',
          id: 'orang-kompeten/osh-coordinator/osh-daftar',
          label: 'OSH-Coordinator',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/risiko-bising/risiko-bising-daftar',
          label: 'Penaksir Risiko Bising',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/risiko-bising/risiko-bising-renewal',
          label: 'Penaksir Risiko Bising',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/ods/ods-gred1',
          label: 'ODS Gred 1',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/ods/ods-gred2',
          label: 'ODS Gred 2',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/medical-surveillance/medical-surveillance-daftar',
          label: 'Medical Surveillance',
          className: 'hideItem',
        },
      ],
    },
    // Pendaftaran Tempat Kerja
    {
      type: 'category',
      label: 'Pendaftaran Tempat Kerja',
      link: {
        type: 'doc',
        id: 'pendaftaran/pendaftaran-tk',
      },
      items: [
        {
          type: 'doc',
          id: 'pemtk/pemtk',
          label: 'Daftar Tempat Kerja',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'pemtk/patk',
          label: 'Aktif Tempat Kerja',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'tempat-kerja/belum-daftar',
          label: 'Belum Daftar Tempat Kerja',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'tempat-kerja/kemaskini-tempat-kerja',
          label: 'Kemaskini Tempat Kerja',
          className: 'hideItem',
        },
      ],
    },
    //Pengendalian tk n loji
    {
      type: 'category',
      label: 'Pengendalian Tempat Kerja dan Loji',
      link: {
        type: 'doc',
        id: 'loji/pengendalian-tk-loji',
      },
      items: [
        {
          type: 'doc',
          id: 'loji/psk',
          label: 'Penarafan Status Kerajaan',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/ambil-alih-tk',
          label: 'Ambil Alih Tempat Kerja',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/pemberitahuan-aktiviti-loji-jkkp5',
          label: 'JKKP5',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/pekala',
          label: 'Permohonan Pemeriksaan Berkala (PEKALA)',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/pti',
          label: 'Permohonan Kebenaran Memasang Loji (PTI)',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/pemula',
          label: 'Permohonan Pemeriksaan Permulaan (PEMULA)',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/pbuka',
          label: 'Pemberitahuan Pembukaan Loji (PBUKA)',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/pbaik',
          label: 'Pemberitahuan Pembaikkan Loji (PBAIK)',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/psl/pelupusan',
          label: 'Pelupusan',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/psl/pengecualian',
          label: 'Tidak Digunakan',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/psl/tidak-digunakan',
          label: 'Pengecualian',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/pplp',
          label: 'Pemunya',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'loji/pplhm',
          label: 'Hak Milik',
          className: 'hideItem',
        },
      ],
    },
    //JKKP12
    {
      type: 'category',
      label: 'Pengendalian Tapak Pembinaan (JKKP12)',
      link: {
        type: 'doc',
        id: 'JKKP12/jkkp12',
      },
      items: [
        {
          type: 'doc',
          id: 'JKKP12/klien',
          label: 'Klien',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'JKKP12/klien-domestik',
          label: 'Klien Domestik',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'JKKP12/pengaktifan-tapak',
          label: 'Pengaktifan Tapak',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'JKKP12/penilaian-kendiri',
          label: 'Penilaian Kendiri',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'JKKP12/ruangan-kerja-projek',
          label: 'Ruangan Kerja Projek',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'JKKP12/ruangan-kerja-tapak-pembinaan',
          label: 'Ruangan Kerja Tapak Pembinaan',
          className: 'hideItem',
        },
      ],
    },
    //Kemalangan & Aduan
    {
      type: 'category',
      label: 'Kemalangan & Aduan',
      link: {
        type: 'doc',
        id: 'aduan/kemalangan-aduan',
      },
      items: [
        {
          type: 'doc',
          id: 'aduan/aduan',
          label: 'Aduan',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'aduan/kemalangan-JKKP6',
          label: 'Kemalangan - JKKP6',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'aduan/penyakit-JKKP7',
          label: 'Penyakit - JKKP7',
          className: 'hideItem',
        },
      ],
    },
    //Lain-Lain
    {
      type: 'category',
      label: 'Lain-Lain',
      link: {
        type: 'doc',
        id: 'lain-lain/lain-lain',
      },
      items: [
        {
          type: 'doc',
          id: 'lain-lain/dashboard-pemohon',
          label: 'Dashboard Pemohon',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'orang-kompeten/bohs',
          label: 'BOHS',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'tempat-kerja/SOHELP',
          label: 'SOHELP',
          className: 'hideItem',
        },
      ]
    },
    //Lampiran
    {
          type: 'doc',
          id: 'lampiran/lampiran',
          label: 'BOHS',
          
        },
    //FAQ
    {
      type: 'category',
      label: 'FAQ',
      link: {
        type: 'doc',
        id: 'FAQ/faq',
      },
      items: [
        {
          type: 'doc',
          id: 'FAQ/tk',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'FAQ/loji',
          className: 'hideItem',
        },
        {
          type: 'doc',
          id: 'FAQ/oyk',
          className: 'hideItem',
        },
      ],
    },
  ]
};

export default sidebars;
