const MULTI_LANG_TEXTS = {
  // ------------------------------- Window title ------------------------------
  title: { en: 'Imai Laboratry', ja: '慶應義塾大学 今井研究室' },

  // ---------------------------- Language Switcher ----------------------------
  language: { en: 'Language', ja: '言語' },

  // ----------------------------------- Menu ----------------------------------
  menu_home: { en: 'Home', ja: 'ホーム' },
  menu_research: { en: 'Research', ja: '研究' },
  menu_research_theme: { en: 'Research Theme', ja: '研究分野' },
  menu_research_proj: { en: 'Research Projects', ja: '研究プロジェクト' },
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
  menu_class: { en: 'Class', ja: '授業' },
  menu_b3: { en: 'For B3', ja: 'B3向け情報' },
  menu_activity: { en: 'Activities', ja: 'アクティビティ' },
  menu_activity_award: { en: 'Awards', ja: '受賞' },
  menu_activity_media: { en: 'Media', ja: 'メディア' },
  menu_activity_talk: { en: 'Talks', ja: '登壇' },

  // ----------------------------------- Home ----------------------------------
  home_imailab: {
    en: 'INTERACTIVE ARTIFICIAL INTELLIGENCE LABORATORY',
    ja: 'INTERACTIVE ARTIFICIAL INTELLIGENCE LABORATORY' },

  home_message: {
    en: 'We are developing interactive AI algorithms and systems that augment the interaction between people and information systems and the communication between people.',
    ja: '人と情報システムのインタラクション・人と人のコミュニケーションを拡張するインタラクティブAIについて研究しています。'
  },

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

  // ------------------------------- Research AI -------------------------------
  research_ai_head: {
    en: 'The research of contextual language understanding',
    ja: '文脈を考慮した言語対話研究' },
  research_ai_short: {
    en: 'Contextual language understanding',
    ja: '文脈を考慮した言語対話研究' },
  research_ai_exp: {
    en: 'The meaning of a word depends on the context. The context consists of words that have a fixed meaning. Since the context and the senses depend on each other, a method of the simultaneous estimation is significant to grasp the flow of a dialogue. In the theme, we are developing a language comprehension algorithm that progresses in time to gradually understand what the other person is saying in a conversation while allowing misunderstanding each other.',
    ja: '単語の意味は文脈で決まります。文脈は、意味が決まった単語で構成されます。双方が相手の構成要素となっているので、同時に推定していく手法が必要になります。このテーマでは、お互いが勘違いしながらも、徐々に対話の中で相手の言わんとしていることを理解していく時間進展のある言語理解アルゴリズムを開発しています。' },

  // ------------------------------- Research SI -------------------------------
  research_si_head: {
    en: 'The research of situated interaction',
    ja: '状況・画像と言語' },
  research_si_short: {
    en: 'Situated interaction',
    ja: '状況・画像と言語' },
  research_si_exp: {
    en: 'Situated expressions are related to things and events in the environment around them and exclude obvious information from themselves. People select the relevant environmental stuff along with the progress of the dialogue. In this theme, we are investigating a method for determining important information for a conversation from image information and sensor information.',
    ja: '時に、人の発言は周囲の物や出来事に関連していて、自明な事柄は初略されます。また、周囲にある沢山の物のどれを無視して、どれに注目したらいいのかも、対話の文脈が進む中で決まってきます。このテーマでは、画像情報やセンサ情報の中から対話に重要な情報を決めていく手法の研究も行っています。' },

  // ------------------------------- Research AD -------------------------------
  research_ad_head: {
    en: 'Augmented Dialogue',
    ja: 'オーギュメンテッド対話：人のインタラクションの支援' },
  research_ad_exp: {
    en: 'The difficulty in human-human communication is related to the uncertainty of whether the other person understands the meaning of what you want to say or is looking at the material you want to show. In this theme, we develop an Augmented Dialogue that supports dialogue between people by guessing the missing information that occurs in the interaction by using an artificial intelligence system.',
    ja: '人と人のコミュニケーションで難しいのは、対話の中で相手が自分が言いたいことの意味を正しく理解しているのか、自分が示したい資料を見ているか本当のところは分からないことです。このテーマでは、対話分析する人工知能でやりとりの中で生じる欠けた情報を推測することで人と人の対話を支援するオーギュメンテッド対話を実現しようとしています。' },

  // ------------------------------- Research IU -------------------------------
  research_iu_head: {
    en: 'Interactive understanding others with small samples',
    ja: '少数サンプルと他者理解' },
  research_iu_short: {
    en: 'Interactive understanding others',
    ja: '少数サンプルと他者理解' },
  research_iu_exp: {
    en: 'Humans are able to acquire the model of the others with small numbers of interactions, while the machine learning algorithm requires a certain amount of data. The theme develops an AI system in the scene of understanding others in interaction by comparing the tendency of human interlocutors with the machine learning algorithm.',
    ja: '機械学習をするためには大量のデータが必要ですが、人は少ないサンプルでも理解できてしまうことが多々あります。本研究では、機械学習の特性と、人との情報集約の特性を比較しながら、人が他人から情報を聞き出す他者理解のインタラクションの場面に適応可能な新しいアルゴリズムの研究をしています。' },

  // ------------------------------- Research UI -------------------------------
  research_ui_head: {
    en: 'User Interface for Mutual Adaptation',
    ja: '人と相互適応するユーザインタフェース' },
  research_ui_exp: {
    en: 'There are a lot of autonomous machines that accept humans\' control, such as computer applications, computer games, teleoperated robots, and autonomous vehicles. The control interface for the devices provides a pre-designed method, while users have their preferred style of control. The theme investigates a control environment to support mutual adaptation between users and machines by using a technique of machine learning.',
    ja: 'モバイルアプリケーション、ゲーム、テレプレゼンスロボット、自律走行車など、自動的に動きつつも人が操作する物が沢山存在します。本当は、人それぞれ別の操作方法が良いのにもかかわらず、事前にデザインされた操作インタフェースが提供されている物がほとんどです。このテーマでは、人が機械に慣れていく過程と、機械が人の特性を学習していく過程を相互適応として捉えて、より使いやすい知的な操作環境を提供することを目指しています。' },

  // ------------------------------- Research AG -------------------------------
  research_ag_head: {
    en: 'Agent based user interface',
    ja: 'エージェントインタフェース' },
  research_ag_exp: {
    en: 'We study an autonomous agent to support the user\'s daily life via interaction. The agent is expected to migrate different types of home appliances to help the user, which is difficult for the robot, which has a physical embodiment. We try to propose the agent-based user interface to integrate the services of living environments and home appliances.',
    ja: '人と対話形式で生活支援をするエージェントの研究をしています。ソフトウェアエージェントは、ロボットと異なり、様々な機器に移動しでサービスできるなどより柔軟な支援の提供が期待できます。本研究では、生活環境・家電機器のサービスをエージェントで統一的に扱えるユーザインタフェースの構築を目指し研究しています。' },

  // ------------------------------- Research Projects -------------------------------

  research_proj_crest: {
    en: 'CREST',
    ja: 'CREST'
  },
  research_proj_crest_desc: {
    en: 'A study on Mutual Understanding Computing based on Simultaneous Contextualization and Interpreting',
    ja: '文脈と解釈の同時推定に基づく相互理解コンピューテーションの実現'
  },
  research_proj_sip: {
    en: 'SIP',
    ja: 'SIP'
  },
  research_proj_sip_desc: {
    en: 'Project',
    ja: 'エビデンスに基づくテーラーメイド教育の研究開発'
  },
  research_proj_agv: {
    en: '',
    ja: '農林中央金庫 アグベンチャーラボ'
  },

  // --------------------------------- Members ---------------------------------
  members_head: { en: 'Members', ja: '研究室メンバー' },
  members_past_head: { en: 'Past Members', ja: '過去のメンバー' },
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
