const MULTI_LANG_TEXTS = {
  // ------------------------------- Window title ------------------------------
  title: { en: 'Imai Laboratry', ja: '慶應義塾大学 今井研究室' },

  // ---------------------------- Language Switcher ----------------------------
  language: { en: 'Language', ja: '言語' },

  // ----------------------------------- Menu ----------------------------------
  menu_home: { en: 'Home', ja: 'ホーム' },
  menu_research: { en: 'Research', ja: '研究' },
  menu_research_theme: { en: 'Research Theme', ja: '研究分野' },
  menu_research_hai: {
    en: 'Human-Agent Interaction (HAI)',
    ja: 'ヒューマン-エージェント インタラクション (HAI)' },
  menu_research_hri: {
    en: 'Human-Robot Interaction (HRI)',
    ja: 'ヒューマン-ロボット インタラクション (HRI)' },
  menu_research_ca: { en: 'Cognitive Adaption', ja: '認知適応' },
  menu_research_as: { en: 'Augmented Society', ja: '拡張社会' },
  menu_research_cn: {
    en: 'Cognitive Neural Network',
    ja: '認知的ニューラルネットワーク' },
  menu_member: { en: 'Members', ja: 'メンバー' },
  menu_publication: { en: 'Publications', ja: '論文/業績' },
  menu_publication_journal: { en: 'Journal', ja: 'ジャーナル' },
  menu_publication_international: {
    en: 'International Conference',
    ja: '国際会議' },
  menu_publication_domestic: {
    en: 'Domestic Conference (Japan)',
    ja: '国内会議 (日本)' },
  menu_links: { en: 'Link', ja: '外部リンク' },
  menu_access: { en: 'Access', ja: 'アクセス' },
  menu_b3: { en: 'For B3', ja: 'B3向け情報' },
  menu_activity: { en: 'Activities', ja: 'アクティビティ' },
  menu_activity_award: { en: 'Awards', ja: '受賞' },
  menu_activity_media: { en: 'Media', ja: 'メディア' },
  menu_activity_talk: { en: 'Talks', ja: '登壇' },

  // ----------------------------------- Home ----------------------------------
  home_imailab: {
    en: 'INTERACTIVE ARTIFICIAL INTELLIGENCE LABORATORY',
    ja: 'インタラクティブAIの研究室' },

  home_keywords: { en: 'Keywords', ja: 'キーワード' },

  // --------------------------------- Research --------------------------------
  research_head: {
    en: 'Interactive Artificial Intelligence',
    ja: 'インタラクティブAI' },
  research_layer_cap: {
    en: 'Three layer for Interactive AI',
    ja: 'Interactive AIを実現する3階層' },
  research_exp: {
    en: 'Imai Laboratory studies mechanisms for Interactive Artificial Intelligence based on Cognitive Science, Artificial Intelligence, Robotics, Intelligent Sensor Network, and Interaction Design.\n\nWe are especially interested in the particular interaction in a physical world including humans and machines. An intelligent machine has to have a skill of interacting with people by developing a relation, adapting each other, sharing information with them, supporting their activities, and developing a new symbiosis society. A robot, a computer graphic agent, and a sensor network are our key technologies to develop the interactive artificial intelligent system. We develop an interaction model and/or mechanism on the physical agent, and show how the model/mechanism works at a wild situation.\n\nOur design principle for developing the interactive artificial intelligence is a three layered model consisting of the layer of knowledge base interaction/adaptation/learning, the layer of theory of mind, and the layer of generating liveness. We consider that the AI technologies cannot be applied to interaction without the skill of the theory of mind and the liveness. We investigate how the mechanisms of the three layers cooperate to achieve a natural interaction with humans.',
    ja: '今井研究室では、認知科学・人工知能・知能ロボット・知的センサネットワーク・インタラクションデザインを基盤として、インタラクティブな人工知能を実現するメカニズムの研究を行っています。特に、人と機械を含む実世界でのインタラクションを対象にインタラクティブ人工知能システムの研究を行っています。\n\nインタラクティブ人工知能システムでは、人とインタラクションする能力を基に人と関係を築いたり、人と相互に適応したり、人と情報を共有したり、人の生活を支援したりする人と機械の共生環境の実現を目指しています。ロボットやコンピュータグラフィックスエージェント、センサネットワークを利用することで、インタラクションのモデルやメカニズムを明らかにし、実世界で活躍できる知能システムの実現をめざします。\n\n今井研究室では、デザイン原理として三つのインタラクションの層を考えています。一番下は今性の層(Liveness)、その上に心の理論の層(Reading the other’s mind)、一番上に知的で適応的なインタラクションの層(Adaptation, Learning)があり、これらが連携して初めて人と機械の間のインタラクションが成立すると考えています。人は、今性のある機械の動きを見て機械に心があることを想定し、結果として、機械と知的な駆け引きをしたり、相互に適応したりします。このデザイン原理の基で知的システムを設計しています。' },

  // ------------------------------- Research HAI ------------------------------
  research_hai_head: {
    en: 'Human-Agent Interaction (HAI)',
    ja: 'ヒューマン-エージェント インタラクション (HAI)' },
  research_hai_migration_head: { en: 'Agent Migration', ja: 'マイグレーション' },
  research_hai_migration_exp: {
    en: 'We develop a personal CG agent to assist human daily activities. The personal CG agent can migrate on a mobile device and home appliances by keeping a relation with a user.\n\nThe advantage of the migration is to solve a problem that the user has to manage a complex digital environments consisting of lots of software applications, IoT devices, and physical services like a robot. The migration of the personal CG agent can keep the personal information of the user to control the way of accessing the services and provide tailored experiences in the integrated digital system. The knowledge based interaction and the theory of mind are important for designing the agent migration. Moreover, the lively behaviors of the personal CG agent is important to develop a relationship with the user for initiate the interaction.',
    ja: '人の日常生活を支援するパーソナルCGエージェントを開発しています。パーソナルCGエージェントは、ユーザとの関係を保存しながら、携帯端末や様々な家電に乗り移ることができます。この機能をエージェントマイグレーションと呼びます。\n\nエージェントマイグレーションによって、ユーザは、複雑化するデジタル機器群を、同一のやりかたで使用することができるようになります。特に、エージェントを仲介して機器を用いることで、それぞれのユーザに特化する形で家電の機能を提供することができるようになります。また、ユーザは、エージェントと心を読み合う関係を構成することができるので、エージェントと状況を共有し協調して活動することができるようになります。' },

  // ------------------------------- Research HRI ------------------------------
  research_hri_head: {
    en: 'Human-Robot Interaction (HRI)',
    ja: 'ヒューマン-ロボット インタラクション (HRI)' },
  research_hri_liveness_head: {
    en: 'Liveliness for an intelligent robot',
    ja: '知能ロボットの今性の効果' },
  research_hri_liveness_exp: {
    en: 'Designing interaction between a person and an intelligent robot requires that the robot shows liveliness to engage a user in the interaction. The lively behaviors motivate the person to read a robot’s mind (an imagined mental state of the robot) unconsciously. The figure shows a scene where a user teaches the robot the name of objects and the robot behaves in response to the user’s utterances and actions. The continuous immediate responses regulate the user’s teaching behaviors and establish a natural human-robot interaction.',
    ja: '人とロボットのコミュニケーションを成立させるためには、ロボットが今性を示す振る舞いをする必要があります。\n\nロボットの今性とは、人の話しかけや動き、周辺に起きる出来事に実時間でロボットが反応を示し、ロボットが同じ文脈を共有していると人に思わせることです。ロボットが今性を示して、初めて人はロボットの心（想像上のロボットの心の状態）を推測してくれるようになります。上の写真は、ユーザがロボットに物の名前を教えている場面です。ユーザの教える振る舞いに反応することでロボットは今性を示しています。ユーザは、ロボットの反応を見て、理解度を想定しながら教えるという行為を自然に行うことができてます。' },
  research_hri_immersion_head: {
    en: 'Communication strategy',
    ja: '人とロボットのコミュニケーションの演出' },
  research_hri_immersion_exp: {
    en: 'One of important problems is how the robot initiates the interaction with a human. The picture shows a solution for the problem. The robot uses five senses of a human to attract her/him to interact with the robot. The robot gives a person a chocolate bar in the picture and give him an utterance related to what he feels by eating the bar. For example, the robot said “It is delicious, isn’t it?” The emotional utterance makes the persons engage in the interaction with the robot.',
    ja: 'ロボットの方から人に話しかけてコミュニケーションを開始することは、その反対（人がロボットに話しかけて開始する場合）よりも難しいことが知られています。\n\n写真の研究は、人の五感を利用してロボットが人とのコミュニケーションを開始しようとしている場面です。この手法は、コミュニケーションを開始する上で高い効果があることが分かりました。ロボットが人にチョコレートをあげて、人が食べるように勧めているシーンです。ここで、人がチョコを食べ始めたときにロボットが「おいしいでしょ？」と話しかけます。すると、ロボットが人に対して共感している（ロボットが人の心を読んでいる）と人に思わせる効果があり、円滑にコミュニケーションを開始できることが分かりました。' },
  research_hri_emotion_head: {
    en: 'Emotion Recognition',
    ja: 'インタラクションを利用した感情認識' },
  research_hri_emotion_exp: {
    en: 'Emotional recognition is also an important theme to develop an intelligent robot. Interactive artificial intelligence considers the issue of the emotion in the context of interaction. The human’s emotion is in the loop of the interaction with the robot. We cannot deal with it independent from the interaction. This project develops an emotion recognition mechanism which interprets the human’s facial expression in the context of interaction with the robot.',
    ja: '感情認識は、知能ロボットを作る上でも重要な研究テーマです。インタラクションの中で感情認識を考えると、インタラクションの文脈も考慮すべきであることが分かっています。人の感情は、ロボットとのインタラクションのループの中で変化しますので、インタラクションの文脈から独立して扱うべきものではありません。この研究は、人とロボットのインタラクションの文脈を参照し、人の表情を解釈する方法を研究しています。' },

  // ------------------------------- Research CA -------------------------------
  research_ca_head: { en: 'Cognitive Adaption', ja: '認知適応' },
  research_ca_wheelchair_head: { en: 'Wheelchair', ja: '車椅子の適応' },
  research_ca_wheelchair_exp: {
    en: 'An autonomous vehicle becomes popular along the emergence of a self-driving car. However, the relation between a driver and the vehicle is not studied well. We are investigating the effect of an adaptation process on the particular relation with the vehicle. Although a machine learning technique can acquire the model of the driver, there are two design stances as the result of the adaptation; one is a machine as the part of the driver’s body. And the other is an autonomous machine which has an independent embodiment. We are revealing criteria to achieve one of the design stance by conducting an experiment.',
    ja: '自動運転技術の発達にともなって自律走行車への期待が高まっています。自動運転の技術の次に、ドライバーと走行車の関係の研究を行っていくことが重要になってきます。特に、人が走行車に適応する過程に関する研究が重要です。\n\n機械学習の手法は運転者のモデルを獲得する必要がありますが、一方で、そこで生じる運転者と走行車の関係には2種類のタイプが存在します。走行車が人の体の一部として捉えられる場合と、人と独立に自律して動くと捉えられる場合です。本研究では、走行車のどのような要因がこれら二つの違いに繋がるのか研究を行っています。' },

  // ------------------------------- Research AS -------------------------------
  research_as_head: { en: 'Augmented Sociality', ja: '拡張社会' },
  research_as_teroos_head: { en: 'TEROOS Project', ja: 'TEROOS プロジェクト' },
  research_as_teroos_exp: {
    en: 'Our communication environment can be extended by using IT. TEROOS project developed a shoulder mounted robot named TEROOS which enables a remote user share their vision and attention with a local user via the embodied expression of TEROOS. We conducted a field test between Akihabara and Yokohama, and a test between Hawaii and Japan to reveal how TEROOS mediated the long-distance communication by using its social appearance.',
    ja: 'IT技術を使うことで私たちのコミュニケーション環境は拡張することができます。TEROOSは、肩に乗せることのできるテレプレゼンスロボットで、遠隔のユーザと現地のユーザが視線を共有しながら身体的表現を用いたインタラクションをすることができます。TEROOSを用いて秋葉原と横浜を繋げる実験や、ハワイと福島を繋げる実験を行い、新しいデバイスで人がどのようなインタラクションを行うことができるのかを明らかにしました。' },
  research_as_prot_head: { en: 'PROT Project', ja: 'PROT プロジェクト' },
  research_as_prot_exp: {
    en: 'PROT project employs a movable projector to project the image of a remote user at any surfaces. The local user has an amazing experience in the interaction with the remote user. They can interact each other by referring to physical objects at the local environment.',
    ja: 'PROTは、映像を移動させ周囲の任意の壁にCGアバタを投影できるシステムです。遠隔のユーザが自分の分身であるCGアバタを移動させ、現地のユーザの周囲にある物体を共有しながらインタラクションができる環境を構築しました。' },

  // ------------------------------- Research CN -------------------------------
  research_cn_head: {
    en: 'Cognitive Neural Network',
    ja: '認知的ニューラルネットワーク' },
  research_cn_mouse_head: { en: '', ja: '' },
  research_cn_mouse_exp: {
    en: 'We are investigating a mechanism for an interactive artificial intelligence based on a cognitive neural network model. We cannot find the mechanism without considering the effect of an embodiment and social relation with the other agents. The other significant point is to find the way that the mechanism keeps the liveness of agent’s behaviors to engage people in the interaction with the agent.',
    ja: 'インタラクティブAIシステムを構築するための機構を、認知的神経回路モデルを用いて研究しています。\n\nエージェント自体の身体性および周囲のエージェントとの社会的関係を考慮にいれることで、インタラクションのメカニズムを明らかにしようとしています。また、エージェントの今性のある反応も考慮することで、エージェントとのインタラクションに人を引き込む方法にも注目しています。' },

  // --------------------------------- Members ---------------------------------
  members_head: { en: 'Members', ja: '研究室メンバー' },
  members_past_head: { en: 'Past Members', ja: '卒業生' },
  members_past_grade_doctor: { en: 'Doctor', ja: '博士' },
  members_past_grade_master: { en: 'Master', ja: '修士' },
  members_past_grade_bachelor: { en: 'Bachelor', ja: '学士' },

  // ------------------------------- Publications ------------------------------
  publication_journal_head: { en: 'Journal', ja: 'ジャーナル' },
  publication_international_head: {
    en: 'International Conference',
    ja: '国際会議' },
  publication_domestic_head: {
    en: 'Domestic Conference (Japan)',
    ja: '国内会議 (日本)' },

  // ---------------------------------- Links ----------------------------------
  links_head: { en: 'Links', ja: '外部リンク' },

  // ---------------------------------- Access ---------------------------------
  access_location_head: {
    en: 'Location of Imai Laboratory',
    ja: '今井研究室所在地' },
  access_location_exp: {
    en: 'Imai Laboratory is located in Yagami Campus.',
    ja: '今井研究室は矢上キャンパスにあります。\n' +
                            '見学は26-203へどうぞ。' },
  access_address: {
    en: 'Imai Laboratory, Dept. of Information & Computer Science,\n' +
        'Faculty of Science & Technology, Keio University\n' +
        '3-14-1 Hiyoshi, Kohoku-ku, Yokohama-shi, Kanagawa-ken 223-8522 Japan',
    ja: '〒223-8522\n' +
        '神奈川県横浜市港北区日吉 3-14-1\n' +
        '慶應義塾大学理工学部情報工学科 今井研究室' },
  access_rooms: {
    en: 'Professor Michita Imai’s Room: 26-208B\n' +
        'Students’ Room: 26-203\n' +
        'Experimental Room: 25-419\n',
    ja: '今井倫太 教授 居室: 26-208B\n' +
        '学生居室: 26-203\n' +
        '実験室: 25-419\n' },
  access_tel: {
    en: 'TEL: +81-45-566-1515 (Professor’s Room)\n' +
        'TEL: +81-45-566-1749 (Students’ Room)',
    ja: 'TEL: 045-566-1515 (教授居室)\n' +
        'TEL: 045-566-1749 (学生居室)\n' },
  access_accessmap_head: {
    en: 'Access Map (external)',
    ja: 'アクセスマップ (外部サイト)' },
  access_accessmap_link1: {
    en: 'Route to Yagami Campus (Japanese)',
    ja: '矢上キャンパスへの行き方' },
  access_accessmap_link2: {
    en: 'Yagami Campus Map (Japanese)',
    ja: '交通アクセス' },

  // ---------------------------------- Activities ---------------------------------
  activity_award_head: { en: 'Awards', ja: '受賞' },
  activity_media_head: { en: 'Media', ja: 'メディア' },
  activity_talk_head: { en: 'Talks', ja: '登壇' },

  // ---------------------------------- Footer ---------------------------------
  footer: { en: '\u00A9Imai Laboratry', ja: '\u00A9今井研究室' }
};

// -----------------------------------------------------------------------------
// ------------------------------ Helper function ------------------------------
// -----------------------------------------------------------------------------
export function GetGeneralTexts(lang) {
  var texts = {};
  for (var key in MULTI_LANG_TEXTS) {
    if (lang in MULTI_LANG_TEXTS[key]) {
      // Matched text
      texts[key] = MULTI_LANG_TEXTS[key][lang];
    } else {
      // Something else
      var vals = Object.values(MULTI_LANG_TEXTS[key]);
      if (vals.length > 0) {
        texts[key] = vals[0];
      } else {
        console.warn('Failed to find text: (' + lang + ', ' + key + ')');
      }
    }
  }
  return texts;
}
