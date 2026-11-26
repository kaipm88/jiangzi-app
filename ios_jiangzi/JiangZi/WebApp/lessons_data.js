// JiangZi Structured Curriculum: Topic Lessons (HSK 1-9), 2-Char Compound Context Challenges & Pinyin Listening Quiz
window.JIANGZI_LESSONS = {
  radicals: [
    {
      id: 'rad_1',
      title: 'Bài 1 • Thiên nhiên & Vũ trụ',
      desc: '6 bộ thủ tượng hình nền tảng nhất trong chữ Hán',
      words: [
        { char: '日', pinyin: 'rì', hanviet: 'NHẬT', meaning: 'Mặt trời, ngày', level: 'Bộ thủ', strokeCount: 4, radicals: [{ text: '日', title: 'Mặt trời' }], story: 'Hình mặt trời có vệt sáng ở giữa', collocations: [{ hanzi: '日子', pinyin: 'rìzi', meaning: 'ngày tháng' }, { hanzi: '生日', pinyin: 'shēngrì', meaning: 'sinh nhật' }], sentences: [{ hanzi: '祝你生日快乐！', pinyin: 'Zhù nǐ shēngrì kuàilè!', meaning: 'Chúc bạn sinh nhật vui vẻ!' }], compound: { word: '日月', pinyin: 'rìyuè', meaning: 'nhật nguyệt, năm tháng', sentence: '___如梭。', full: '日月如梭。', vi: 'Ngày tháng thoi đưa.' } },
        { char: '月', pinyin: 'yuè', hanviet: 'NGUYỆT', meaning: 'Mặt trăng, tháng', level: 'Bộ thủ', strokeCount: 4, radicals: [{ text: '月', title: 'Mặt trăng' }], story: 'Hình vầng trăng khuyết trên bầu trời đêm', collocations: [{ hanzi: '月亮', pinyin: 'yuèliang', meaning: 'mặt trăng' }], sentences: [{ hanzi: '今晚的月亮很圆。', pinyin: 'Jīnwǎn de yuèliang hěn yuán.', meaning: 'Trăng tối nay rất tròn.' }], compound: { word: '一月', pinyin: 'yīyuè', meaning: 'tháng Một', sentence: '现在是___。', full: '现在是一月。', vi: 'Bây giờ là tháng Một.' } },
        { char: '水', pinyin: 'shuǐ', hanviet: 'THỦY', meaning: 'Nước, dòng chảy', level: 'Bộ thủ', strokeCount: 4, radicals: [{ text: '水', title: 'Nước' }], story: 'Dòng nước uốn lượn ở giữa cùng giọt bắn hai bên', collocations: [{ hanzi: '喝水', pinyin: 'hē shuǐ', meaning: 'uống nước' }, { hanzi: '水果', pinyin: 'shuǐguǒ', meaning: 'trái cây' }], sentences: [{ hanzi: '多喝水对身体好。', pinyin: 'Duō hē shuǐ duì shēntǐ hǎo.', meaning: 'Uống nhiều nước tốt cho sức khỏe.' }], compound: { word: '山水', pinyin: 'shānshuǐ', meaning: 'sơn thủy, non nước', sentence: '桂林___甲天下。', full: '桂林山水甲天下。', vi: 'Non nước Quế Lâm đẹp nhất thiên hạ.' } },
        { char: '火', pinyin: 'huǒ', hanviet: 'HỎA', meaning: 'Ngọn lửa, nhiệt huyết', level: 'Bộ thủ', strokeCount: 4, radicals: [{ text: '火', title: 'Lửa' }], story: 'Ngọn lửa bùng lên cao với hai tia lửa hai bên', collocations: [{ hanzi: '火车', pinyin: 'huǒchē', meaning: 'tàu hỏa' }, { hanzi: '大火', pinyin: 'dàhuǒ', meaning: 'lửa lớn' }], sentences: [{ hanzi: '我们坐火车去北京。', pinyin: 'Wǒmen zuò huǒchē qù Běijīng.', meaning: 'Chúng tôi đi tàu hỏa đến Bắc Kinh.' }], compound: { word: '水火', pinyin: 'shuǐhuǒ', meaning: 'nước và lửa', sentence: '___不容。', full: '水火不容。', vi: 'Nước lửa không dung hòa.' } },
        { char: '木', pinyin: 'mù', hanviet: 'MỘC', meaning: 'Cây cối, gỗ', level: 'Bộ thủ', strokeCount: 4, radicals: [{ text: '木', title: 'Cây' }], story: 'Thân cây thẳng đứng, cành ngang và rễ tỏa xuống đất', collocations: [{ hanzi: '树木', pinyin: 'shùmù', meaning: 'cây cối' }], sentences: [{ hanzi: '公园里有很多树木。', pinyin: 'Gōngyuán lǐ yǒu hěn duō shùmù.', meaning: 'Trong công viên có rất nhiều cây cối.' }], compound: { word: '木头', pinyin: 'mùtou', meaning: 'khúc gỗ', sentence: '这块___很重。', full: '这块木头很重。', vi: 'Khúc gỗ này rất nặng.' } },
        { char: '山', pinyin: 'shān', hanviet: 'SƠN', meaning: 'Ngọn núi', level: 'Bộ thủ', strokeCount: 3, radicals: [{ text: '山', title: 'Núi' }], story: 'Ba đỉnh núi nhấp nhô vươn cao lên bầu trời', collocations: [{ hanzi: '爬山', pinyin: 'páshān', meaning: 'leo núi' }], sentences: [{ hanzi: '周末我们去爬山吧！', pinyin: 'Zhōumò wǒmen qù páshān ba!', meaning: 'Cuối tuần chúng mình đi leo núi nhé!' }], compound: { word: '火山', pinyin: 'huǒshān', meaning: 'núi lửa', sentence: '这是一座___。', full: '这是一座火山。', vi: 'Đây là một ngọn núi lửa.' } }
      ]
    },
    {
      id: 'rad_2',
      title: 'Bài 2 • Con người & Tâm hồn',
      desc: 'Các bộ thủ xoay quanh hình dáng và cảm xúc con người',
      words: [
        { char: '人', pinyin: 'rén', hanviet: 'NHÂN', meaning: 'Con người', level: 'Bộ thủ', strokeCount: 2, radicals: [{ text: '人', title: 'Người' }], story: 'Dáng người đứng vững bằng hai chân trên mặt đất', collocations: [{ hanzi: '好人', pinyin: 'hǎorén', meaning: 'người tốt' }], sentences: [{ hanzi: '他是一个好人。', pinyin: 'Tā shì yí gè hǎorén.', meaning: 'Anh ấy là một người tốt.' }], compound: { word: '大人', pinyin: 'dàrén', meaning: 'người lớn', sentence: '___和孩子都很开心。', full: '大人和孩子都很开心。', vi: 'Người lớn và trẻ nhỏ đều rất vui.' } },
        { char: '女', pinyin: 'nǚ', hanviet: 'NỮ', meaning: 'Phụ nữ, con gái', level: 'Bộ thủ', strokeCount: 3, radicals: [{ text: '女', title: 'Nữ' }], story: 'Dáng người phụ nữ dịu dàng khoanh tay', collocations: [{ hanzi: '女儿', pinyin: 'nǚér', meaning: 'con gái' }], sentences: [{ hanzi: '她是我女儿。', pinyin: 'Tā shì wǒ nǚér.', meaning: 'Cô bé là con gái tôi.' }], compound: { word: '女人', pinyin: 'nǚrén', meaning: 'người phụ nữ', sentence: '她是个温柔的___。', full: '她是个温柔的女人。', vi: 'Cô ấy là một phụ nữ dịu dàng.' } },
        { char: '子', pinyin: 'zǐ', hanviet: 'TỬ', meaning: 'Đứa con, hạt giống', level: 'Bộ thủ', strokeCount: 3, radicals: [{ text: '子', title: 'Con' }], story: 'Em bé dang hai tay đòi bế', collocations: [{ hanzi: '孩子', pinyin: 'háizi', meaning: 'đứa trẻ' }], sentences: [{ hanzi: '孩子们在玩耍。', pinyin: 'Háizimen zài wánshuǎ.', meaning: 'Lũ trẻ đang vui đùa.' }], compound: { word: '子女', pinyin: 'zǐnǚ', meaning: 'con cái', sentence: '父母很爱___。', full: '父母很爱子女。', vi: 'Cha mẹ rất yêu thương con cái.' } },
        { char: '口', pinyin: 'kǒu', hanviet: 'KHẨU', meaning: 'Cái miệng, lối ra vào', level: 'Bộ thủ', strokeCount: 3, radicals: [{ text: '口', title: 'Miệng' }], story: 'Hình cái miệng đang mở ra nói chuyện', collocations: [{ hanzi: '人口', pinyin: 'rénkǒu', meaning: 'dân số' }, { hanzi: '门口', pinyin: 'ménkǒu', meaning: 'cổng, cửa' }], sentences: [{ hanzi: '我在门口等你。', pinyin: 'Wǒ zài ménkǒu děng nǐ.', meaning: 'Tôi đợi bạn ở trước cửa.' }], compound: { word: '人口', pinyin: 'rénkǒu', meaning: 'nhân khẩu, dân số', sentence: '这里___很多。', full: '这里人口很多。', vi: 'Dân số ở đây rất đông.' } },
        { char: '心', pinyin: 'xīn', hanviet: 'TÂM', meaning: 'Trái tim, tấm lòng', level: 'Bộ thủ', strokeCount: 4, radicals: [{ text: '心', title: 'Tim' }], story: 'Hình quả tim và các mạch máu nhịp đập', collocations: [{ hanzi: '开心', pinyin: 'kāixīn', meaning: 'vui vẻ' }], sentences: [{ hanzi: '今天我很开心！', pinyin: 'Jīntiān wǒ hěn kāixīn!', meaning: 'Hôm nay tôi rất vui!' }], compound: { word: '人心', pinyin: 'rénxīn', meaning: 'lòng người', sentence: '日久见___。', full: '日久见人心。', vi: 'Lâu ngày mới rõ lòng người.' } }
      ]
    }
  ],

  hsk1: [
    {
      id: 'hsk1_l1',
      title: 'Bài 1 • Chào hỏi & Làm quen',
      desc: 'Những chữ Hán giao tiếp đầu tiên ai cũng dùng mỗi ngày',
      words: [
        { char: '你', pinyin: 'nǐ', hanviet: 'NHĨ', meaning: 'Bạn, anh, chị (ngôi thứ 2)', level: 'HSK 1', strokeCount: 7, radicals: [{ text: '亻', title: 'Người' }, { text: '尔', title: 'Bạn' }], story: 'Người (亻) đứng đối diện đang trò chuyện cùng bạn', collocations: [{ hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'xin chào' }, { hanzi: '你们', pinyin: 'nǐmen', meaning: 'các bạn' }], sentences: [{ hanzi: '你好吗？', pinyin: 'Nǐ hǎo ma?', meaning: 'Bạn có khỏe không?' }], compound: { word: '你好', pinyin: 'nǐ hǎo', meaning: 'xin chào', sentence: '___，很高兴认识你！', full: '你好，很高兴认识你！', vi: 'Xin chào, rất vui được làm quen với bạn!' } },
        { char: '好', pinyin: 'hǎo', hanviet: 'HẢO', meaning: 'Tốt đẹp, khỏe, hay', level: 'HSK 1', strokeCount: 6, radicals: [{ text: '女', title: 'Mẹ' }, { text: '子', title: 'Con' }], story: 'Người mẹ (女) ôm đứa con (子) vào lòng là điều tốt lành', collocations: [{ hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'xin chào' }, { hanzi: '好看', pinyin: 'hǎokàn', meaning: 'đẹp mắt' }], sentences: [{ hanzi: '今天天气很好。', pinyin: 'Jīntiān tiānqì hěn hǎo.', meaning: 'Hôm nay thời tiết rất tốt.' }], compound: { word: '你好', pinyin: 'nǐ hǎo', meaning: 'xin chào', sentence: '老师，___！', full: '老师，你好！', vi: 'Em chào thầy/cô ạ!' } },
        { char: '我', pinyin: 'wǒ', hanviet: 'NGÃ', meaning: 'Tôi, mình, tớ', level: 'HSK 1', strokeCount: 7, radicals: [{ text: '手', title: 'Tay' }, { text: '戈', title: 'Vũ khí' }], story: 'Tay cầm binh khí khẳng định cái tôi vững vàng', collocations: [{ hanzi: '我们', pinyin: 'wǒmen', meaning: 'chúng tôi' }], sentences: [{ hanzi: '我是越南人。', pinyin: 'Wǒ shì Yuènán rén.', meaning: 'Tôi là người Việt Nam.' }], compound: { word: '我们', pinyin: 'wǒmen', meaning: 'chúng tôi, chúng mình', sentence: '___是好朋友。', full: '我们是好朋友。', vi: 'Chúng mình là bạn tốt.' } },
        { char: '他', pinyin: 'tā', hanviet: 'THA', meaning: 'Anh ấy, ông ấy', level: 'HSK 1', strokeCount: 5, radicals: [{ text: '亻', title: 'Người' }, { text: '也', title: 'Cũng' }], story: 'Người (亻) thứ ba khác ngoài bạn và tôi', collocations: [{ hanzi: '他们', pinyin: 'tāmen', meaning: 'họ, bọn họ' }], sentences: [{ hanzi: '他是我的老师。', pinyin: 'Tā shì wǒ de lǎoshī.', meaning: 'Anh ấy là thầy giáo của tôi.' }], compound: { word: '他们', pinyin: 'tāmen', meaning: 'bọn họ', sentence: '___在学中文。', full: '他们在学中文。', vi: 'Bọn họ đang học tiếng Trung.' } },
        { char: '们', pinyin: 'men', hanviet: 'MÔN', meaning: 'Các, chúng (chỉ số nhiều)', level: 'HSK 1', strokeCount: 5, radicals: [{ text: '亻', title: 'Người' }, { text: '门', title: 'Cửa' }], story: 'Nhiều người (亻) cùng bước qua cánh cửa (门)', collocations: [{ hanzi: '我们', pinyin: 'wǒmen', meaning: 'chúng tôi' }, { hanzi: '你们', pinyin: 'nǐmen', meaning: 'các bạn' }], sentences: [{ hanzi: '你们去哪儿？', pinyin: 'Nǐmen qù nǎr?', meaning: 'Các bạn đi đâu thế?' }], compound: { word: '你们', pinyin: 'nǐmen', meaning: 'các bạn', sentence: '欢迎___来到越南！', full: '欢迎你们来到越南！', vi: 'Chào mừng các bạn đến Việt Nam!' } }
      ]
    },
    {
      id: 'hsk1_l2',
      title: 'Bài 2 • Thời gian & Ánh sáng',
      desc: 'Cách người xưa ghép Nhật – Nguyệt để nói về ngày mai, hôm nay',
      words: [
        { char: '明', pinyin: 'míng', hanviet: 'MINH', meaning: 'Sáng sủa, thông minh, ngày mai', level: 'HSK 1', strokeCount: 8, radicals: [{ text: '日', title: 'Mặt trời' }, { text: '月', title: 'Mặt trăng' }], story: 'Mặt trời (日) + Mặt trăng (月) = Ánh sáng rực rỡ, ngày mới', collocations: [{ hanzi: '明天', pinyin: 'míngtiān', meaning: 'ngày mai' }, { hanzi: '明白', pinyin: 'míngbai', meaning: 'hiểu rõ' }], sentences: [{ hanzi: '明天见！', pinyin: 'Míngtiān jiàn!', meaning: 'Ngày mai gặp lại nhé!' }], compound: { word: '明天', pinyin: 'míngtiān', meaning: 'ngày mai', sentence: '我们___见！', full: '我们明天见！', vi: 'Ngày mai chúng mình gặp lại nhé!' } },
        { char: '天', pinyin: 'tiān', hanviet: 'THIÊN', meaning: 'Bầu trời, ngày', level: 'HSK 1', strokeCount: 4, radicals: [{ text: '一', title: 'Một' }, { text: '大', title: 'To lớn' }], story: 'Khoảng không bao la trên đỉnh đầu con người (大) chính là bầu trời', collocations: [{ hanzi: '今天', pinyin: 'jīntiān', meaning: 'hôm nay' }, { hanzi: '天气', pinyin: 'tiānqì', meaning: 'thời tiết' }], sentences: [{ hanzi: '今天天气很好。', pinyin: 'Jīntiān tiānqì hěn hǎo.', meaning: 'Thời tiết hôm nay rất đẹp.' }], compound: { word: '今天', pinyin: 'jīntiān', meaning: 'hôm nay', sentence: '___我很忙。', full: '今天我很忙。', vi: 'Hôm nay tôi rất bận.' } },
        { char: '今', pinyin: 'jīn', hanviet: 'KIM', meaning: 'Hiện tại, nay', level: 'HSK 1', strokeCount: 4, radicals: [{ text: '人', title: 'Người' }], story: 'Khoảnh khắc ngay lúc này dưới mái vòm thời gian', collocations: [{ hanzi: '今天', pinyin: 'jīntiān', meaning: 'hôm nay' }, { hanzi: '今年', pinyin: 'jīnnián', meaning: 'năm nay' }], sentences: [{ hanzi: '今年我二十岁。', pinyin: 'Jīnnián wǒ èrshí suì.', meaning: 'Năm nay tôi 20 tuổi.' }], compound: { word: '今年', pinyin: 'jīnnián', meaning: 'năm nay', sentence: '___是好年。', full: '今年是好年。', vi: 'Năm nay là một năm tốt lành.' } },
        { char: '年', pinyin: 'nián', hanviet: 'NIÊN', meaning: 'Năm, niên đại', level: 'HSK 1', strokeCount: 6, radicals: [{ text: '禾', title: 'Lúa' }], story: 'Mỗi mùa lúa chín thu hoạch xong là tròn một năm', collocations: [{ hanzi: '明年', pinyin: 'míngnián', meaning: 'sang năm' }, { hanzi: '新年', pinyin: 'xīnnián', meaning: 'năm mới' }], sentences: [{ hanzi: '新年快乐！', pinyin: 'Xīnnián kuàilè!', meaning: 'Chúc mừng năm mới!' }], compound: { word: '明年', pinyin: 'míngnián', meaning: 'năm sau, sang năm', sentence: '___我去中国。', full: '明年我去中国。', vi: 'Sang năm tôi đi Trung Quốc.' } },
        { char: '早', pinyin: 'zǎo', hanviet: 'TẢO', meaning: 'Buổi sáng, sớm', level: 'HSK 1', strokeCount: 6, radicals: [{ text: '日', title: 'Mặt trời' }, { text: '十', title: 'Ngọn cỏ' }], story: 'Mặt trời (日) vừa nhô lên khỏi ngọn cây (+) lúc sáng sớm', collocations: [{ hanzi: '早上', pinyin: 'zǎoshang', meaning: 'buổi sáng' }, { hanzi: '早安', pinyin: 'zǎoān', meaning: 'chào buổi sáng' }], sentences: [{ hanzi: '老师早！', pinyin: 'Lǎoshī zǎo!', meaning: 'Chào buổi sáng thầy/cô!' }], compound: { word: '早上', pinyin: 'zǎoshang', meaning: 'buổi sáng', sentence: '___好！', full: '早上好！', vi: 'Chào buổi sáng tốt lành!' } }
      ]
    },
    {
      id: 'hsk1_l3',
      title: 'Bài 3 • Học tập & Quốc gia',
      desc: 'Từ vựng giới thiệu bản thân, trường lớp và ngôn ngữ',
      words: [
        { char: '学', pinyin: 'xué', hanviet: 'HỌC', meaning: 'Học tập, rèn luyện', level: 'HSK 1', strokeCount: 8, radicals: [{ text: '宀', title: 'Mái nhà' }, { text: '子', title: 'Đứa trẻ' }], story: 'Đứa trẻ (子) ngồi dưới mái trường tiếp thu tri thức', collocations: [{ hanzi: '学习', pinyin: 'xuéxí', meaning: 'học tập' }, { hanzi: '学生', pinyin: 'xuésheng', meaning: 'học sinh' }], sentences: [{ hanzi: '我在学习汉语。', pinyin: 'Wǒ zài xuéxí hànyǔ.', meaning: 'Tôi đang học tiếng Hán.' }], compound: { word: '学生', pinyin: 'xuésheng', meaning: 'học sinh, sinh viên', sentence: '我是大___。', full: '我是大学生。', vi: 'Tôi là sinh viên đại học.' } },
        { char: '生', pinyin: 'shēng', hanviet: 'SINH', meaning: 'Sinh ra, sự sống, học trò', level: 'HSK 1', strokeCount: 5, radicals: [{ text: '生', title: 'Sinh sôi' }], story: 'Mầm cây xanh vươn lên từ mặt đất (土) đầy sức sống', collocations: [{ hanzi: '学生', pinyin: 'xuésheng', meaning: 'học sinh' }, { hanzi: '生日', pinyin: 'shēngrì', meaning: 'sinh nhật' }], sentences: [{ hanzi: '今天是我的生日。', pinyin: 'Jīntiān shì wǒ de shēngrì.', meaning: 'Hôm nay là sinh nhật tôi.' }], compound: { word: '生日', pinyin: 'shēngrì', meaning: 'sinh nhật', sentence: '祝你___快乐！', full: '祝你生日快乐！', vi: 'Chúc bạn sinh nhật vui vẻ!' } },
        { char: '中', pinyin: 'zhōng', hanviet: 'TRUNG', meaning: 'Ở giữa, trung tâm', level: 'HSK 1', strokeCount: 4, radicals: [{ text: '口', title: 'Khung' }, { text: '丨', title: 'Sổ giữa' }], story: 'Một nét thẳng xuyên đúng tâm điểm chính giữa', collocations: [{ hanzi: '中国', pinyin: 'Zhōngguó', meaning: 'Trung Quốc' }, { hanzi: '中文', pinyin: 'Zhōngwén', meaning: 'tiếng Trung' }], sentences: [{ hanzi: '我会说一点儿中文。', pinyin: 'Wǒ huì shuō yìdiǎnr Zhōngwén.', meaning: 'Tôi biết nói một chút tiếng Trung.' }], compound: { word: '中国', pinyin: 'Zhōngguó', meaning: 'Trung Quốc', sentence: '我想去___旅游。', full: '我想去中国旅游。', vi: 'Tôi muốn đi du lịch Trung Quốc.' } },
        { char: '国', pinyin: 'guó', hanviet: 'QUỐC', meaning: 'Đất nước, quốc gia', level: 'HSK 1', strokeCount: 8, radicals: [{ text: '囗', title: 'Biên cương' }, { text: '玉', title: 'Viên ngọc' }], story: 'Viên ngọc quý (玉) được bảo vệ bên trong đường biên giới (囗)', collocations: [{ hanzi: '国家', pinyin: 'guójiā', meaning: 'quốc gia' }], sentences: [{ hanzi: '越南是一个美丽的国家。', pinyin: 'Yuènán shì yí gè měilì de guójiā.', meaning: 'Việt Nam là một đất nước tươi đẹp.' }], compound: { word: '大国', pinyin: 'dàguó', meaning: 'nước lớn', sentence: '这是一个文化___。', full: '这是一个文化大国。', vi: 'Đây là một đất nước văn hóa lớn.' } },
        { char: '文', pinyin: 'wén', hanviet: 'VĂN', meaning: 'Văn chương, chữ viết, ngôn ngữ', level: 'HSK 1', strokeCount: 4, radicals: [{ text: '文', title: 'Văn tự' }], story: 'Những nét hoa văn đan chéo tạo nên chữ viết loài người', collocations: [{ hanzi: '中文', pinyin: 'Zhōngwén', meaning: 'tiếng Trung' }, { hanzi: '文化', pinyin: 'wénhuà', meaning: 'văn hóa' }], sentences: [{ hanzi: '中文很有意思！', pinyin: 'Zhōngwén hěn yǒuyìsi!', meaning: 'Tiếng Trung rất thú vị!' }], compound: { word: '中文', pinyin: 'Zhōngwén', meaning: 'tiếng Trung Quốc', sentence: '我很喜欢学___。', full: '我很喜欢学中文。', vi: 'Tôi rất thích học tiếng Trung.' } }
      ]
    },
    {
      id: 'hsk1_l4',
      title: 'Bài 4 • Đời sống & Nghỉ ngơi',
      desc: 'Những chữ tượng hình và hội ý sinh động nhất HSK 1',
      words: [
        { char: '休', pinyin: 'xiū', hanviet: 'HƯU', meaning: 'Nghỉ ngơi, thư giãn', level: 'HSK 1', strokeCount: 6, radicals: [{ text: '亻', title: 'Người' }, { text: '木', title: 'Cây' }], story: 'Người (亻) tựa lưng vào gốc cây (木) râm mát để nghỉ ngơi', collocations: [{ hanzi: '休息', pinyin: 'xiūxi', meaning: 'nghỉ ngơi' }], sentences: [{ hanzi: '累了就休息一下吧。', pinyin: 'Lèi le jiù xiūxi yíxià ba.', meaning: 'Mệt rồi thì nghỉ một lát nhé.' }], compound: { word: '休息', pinyin: 'xiūxi', meaning: 'nghỉ ngơi', sentence: '中午我们___一会儿。', full: '中午我们休息一会儿。', vi: 'Buổi trưa chúng mình nghỉ ngơi một lát.' } },
        { char: '息', pinyin: 'xī', hanviet: 'TỨC', meaning: 'Hơi thở, ngơi nghỉ', level: 'HSK 1', strokeCount: 10, radicals: [{ text: '自', title: 'Mũi' }, { text: '心', title: 'Tim' }], story: 'Hơi thở đi từ mũi (自) lắng xuống trái tim (心) bình yên', collocations: [{ hanzi: '休息', pinyin: 'xiūxi', meaning: 'nghỉ ngơi' }, { hanzi: '消息', pinyin: 'xiāoxi', meaning: 'tin tức' }], sentences: [{ hanzi: '这是一个好消息！', pinyin: 'Zhè shì yí gè hǎo xiāoxi!', meaning: 'Đây là một tin tốt lành!' }], compound: { word: '休息', pinyin: 'xiūxi', meaning: 'nghỉ ngơi', sentence: '早点___吧！', full: '早点休息吧！', vi: 'Nghỉ ngơi sớm đi nhé!' } },
        { char: '水', pinyin: 'shuǐ', hanviet: 'THỦY', meaning: 'Nước, chất lỏng', level: 'HSK 1', strokeCount: 4, radicals: [{ text: '水', title: 'Nước' }], story: 'Dòng suối trong mát chảy qua khe đá', collocations: [{ hanzi: '喝水', pinyin: 'hē shuǐ', meaning: 'uống nước' }], sentences: [{ hanzi: '请给我一杯水。', pinyin: 'Qǐng gěi wǒ yì bēi shuǐ.', meaning: 'Xin cho tôi một cốc nước.' }], compound: { word: '大水', pinyin: 'dàshuǐ', meaning: 'nước lớn', sentence: '河里涨了___。', full: '河里涨了大水。', vi: 'Nước dưới sông dâng cao.' } },
        { char: '大', pinyin: 'dà', hanviet: 'ĐẠI', meaning: 'To lớn, trưởng thành', level: 'HSK 1', strokeCount: 3, radicals: [{ text: '大', title: 'Lớn' }], story: 'Người dang rộng hai tay hai chân hết cỡ', collocations: [{ hanzi: '大家', pinyin: 'dàjiā', meaning: 'mọi người' }, { hanzi: '大学', pinyin: 'dàxué', meaning: 'đại học' }], sentences: [{ hanzi: '大家好！', pinyin: 'Dàjiā hǎo!', meaning: 'Chào tất cả mọi người!' }], compound: { word: '大学', pinyin: 'dàxué', meaning: 'trường đại học', sentence: '他在北京读___。', full: '他在北京读大学。', vi: 'Anh ấy học đại học ở Bắc Kinh.' } },
        { char: '小', pinyin: 'xiǎo', hanviet: 'TIỂU', meaning: 'Nhỏ bé, xinh xắn', level: 'HSK 1', strokeCount: 3, radicals: [{ text: '小', title: 'Nhỏ' }], story: 'Ba hạt cát nhỏ li ti tách rời nhau', collocations: [{ hanzi: '小心', pinyin: 'xiǎoxīn', meaning: 'cẩn thận' }, { hanzi: '小时', pinyin: 'xiǎoshí', meaning: 'tiếng đồng hồ' }], sentences: [{ hanzi: '路上小心！', pinyin: 'Lùshang xiǎoxīn!', meaning: 'Đi đường cẩn thận nhé!' }], compound: { word: '大小', pinyin: 'dàxiǎo', meaning: 'kích cỡ (lớn nhỏ)', sentence: '这双鞋___正好。', full: '这双鞋大小正好。', vi: 'Đôi giày này kích cỡ vừa vặn.' } }
      ]
    },
    {
      id: 'hsk1_l5',
      title: 'Bài 5 • Lịch sự & Tạm biệt',
      desc: 'Nói lời cảm ơn, xin mời và hẹn gặp lại chuẩn giao tiếp',
      words: [
        { char: '请', pinyin: 'qǐng', hanviet: 'THỈNH', meaning: 'Mời, xin vui lòng', level: 'HSK 1', strokeCount: 10, radicals: [{ text: '讠', title: 'Lời nói' }, { text: '青', title: 'Trong xanh' }], story: 'Dùng lời nói (讠) chân thành, trong sáng (青) để mời khách', collocations: [{ hanzi: '请问', pinyin: 'qǐngwèn', meaning: 'xin hỏi' }, { hanzi: '请进', pinyin: 'qǐng jìn', meaning: 'mời vào' }], sentences: [{ hanzi: '请坐，请喝茶！', pinyin: 'Qǐng zuò, qǐng hē chá!', meaning: 'Mời ngồi, mời uống trà!' }], compound: { word: '请问', pinyin: 'qǐngwèn', meaning: 'xin hỏi', sentence: '___，地铁站在哪儿？', full: '请问，地铁站在哪儿？', vi: 'Xin hỏi ga tàu điện ngầm ở đâu ạ?' } },
        { char: '谢', pinyin: 'xiè', hanviet: 'TẠ', meaning: 'Cảm ơn, đa tạ', level: 'HSK 1', strokeCount: 12, radicals: [{ text: '讠', title: 'Lời nói' }, { text: '身', title: 'Thân mình' }], story: 'Cúi mình (身) nói lời (讠) biết ơn chân thành', collocations: [{ hanzi: '谢谢', pinyin: 'xièxie', meaning: 'cảm ơn' }], sentences: [{ hanzi: '非常谢谢你！', pinyin: 'Fēicháng xièxie nǐ!', meaning: 'Vô cùng cảm ơn bạn!' }], compound: { word: '谢谢', pinyin: 'xièxie', meaning: 'cảm ơn', sentence: '___你的帮助！', full: '谢谢你的帮助！', vi: 'Cảm ơn sự giúp đỡ của bạn!' } },
        { char: '再', pinyin: 'zài', hanviet: 'TÁI', meaning: 'Lại lần nữa, thêm', level: 'HSK 1', strokeCount: 6, radicals: [{ text: '一', title: 'Một' }], story: 'Chồng thêm một tầng nữa biểu thị sự lặp lại', collocations: [{ hanzi: '再见', pinyin: 'zàijiàn', meaning: 'tạm biệt' }], sentences: [{ hanzi: '请再说一遍。', pinyin: 'Qǐng zài shuō yí biàn.', meaning: 'Xin hãy nói lại một lần nữa.' }], compound: { word: '再见', pinyin: 'zàijiàn', meaning: 'tạm biệt, hẹn gặp lại', sentence: '朋友们，___！', full: '朋友们，再见！', vi: 'Tạm biệt các bạn nhé!' } },
        { char: '见', pinyin: 'jiàn', hanviet: 'KIẾN', meaning: 'Gặp gỡ, nhìn thấy', level: 'HSK 1', strokeCount: 4, radicals: [{ text: '目', title: 'Mắt' }, { text: '儿', title: 'Người' }], story: 'Con mắt (目) đặt trên đôi chân người đi tìm gặp nhau', collocations: [{ hanzi: '再见', pinyin: 'zàijiàn', meaning: 'tạm biệt' }, { hanzi: '看见', pinyin: 'kànjiàn', meaning: 'nhìn thấy' }], sentences: [{ hanzi: '明天见！', pinyin: 'Míngtiān jiàn!', meaning: 'Ngày mai gặp nhé!' }], compound: { word: '再见', pinyin: 'zàijiàn', meaning: 'tạm biệt', sentence: '下周___！', full: '下周再见！', vi: 'Tuần sau gặp lại nhé!' } }
      ]
    }
  ],

  hsk2: [
    {
      id: 'hsk2_l1',
      title: 'Bài 1 • Mái ấm Gia đình',
      desc: 'Các thành viên thân thương dưới một mái nhà',
      words: [
        { char: '家', pinyin: 'jiā', hanviet: 'GIA', meaning: 'Nhà, gia đình', level: 'HSK 2', strokeCount: 10, radicals: [{ text: '宀', title: 'Mái nhà' }, { text: '豕', title: 'Gia súc' }], story: 'Dưới mái nhà (宀) ấm no sung túc tạo thành tổ ấm gia đình', collocations: [{ hanzi: '回家', pinyin: 'huí jiā', meaning: 'về nhà' }, { hanzi: '家人', pinyin: 'jiārén', meaning: 'người nhà' }], sentences: [{ hanzi: '我想回家吃晚饭。', pinyin: 'Wǒ xiǎng huí jiā chī wǎnfàn.', meaning: 'Tôi muốn về nhà ăn cơm tối.' }], compound: { word: '大家', pinyin: 'dàjiā', meaning: 'mọi người', sentence: '___晚上好！', full: '大家晚上好！', vi: 'Chào buổi tối mọi người!' } },
        { char: '爸', pinyin: 'bà', hanviet: 'BA', meaning: 'Bố, cha', level: 'HSK 2', strokeCount: 8, radicals: [{ text: '父', title: 'Cha' }, { text: '巴', title: 'Âm ba' }], story: 'Người cha (父) vững chãi che chở cho con cái', collocations: [{ hanzi: '爸爸', pinyin: 'bàba', meaning: 'bố' }], sentences: [{ hanzi: '我爸爸是医生。', pinyin: 'Wǒ bàba shì yīshēng.', meaning: 'Bố tôi là bác sĩ.' }], compound: { word: '爸爸', pinyin: 'bàba', meaning: 'bố, ba', sentence: '___工作很忙。', full: '爸爸工作很忙。', vi: 'Bố làm việc rất bận.' } },
        { char: '妈', pinyin: 'mā', hanviet: 'MA', meaning: 'Mẹ, má', level: 'HSK 2', strokeCount: 6, radicals: [{ text: '女', title: 'Phụ nữ' }, { text: '马', title: 'Âm ma' }], story: 'Người phụ nữ (女) tảo tần nuôi con khôn lớn', collocations: [{ hanzi: '妈妈', pinyin: 'māma', meaning: 'mẹ' }], sentences: [{ hanzi: '妈妈做的菜最好吃。', pinyin: 'Māma zuò de cài zuì hǎochī.', meaning: 'Món mẹ nấu là ngon nhất.' }], compound: { word: '妈妈', pinyin: 'māma', meaning: 'mẹ', sentence: '我爱___！', full: '我爱妈妈！', vi: 'Con yêu mẹ!' } }
      ]
    },
    {
      id: 'hsk2_l2',
      title: 'Bài 2 • Ẩm thực & Quan sát',
      desc: 'Ăn uống, thưởng trà và hỏi thăm hàng ngày',
      words: [
        { char: '吃', pinyin: 'chī', hanviet: 'NGẬT', meaning: 'Ăn, thưởng thức', level: 'HSK 2', strokeCount: 6, radicals: [{ text: '口', title: 'Miệng' }, { text: '乞', title: 'Âm khất' }], story: 'Dùng miệng (口) thưởng thức món ngon mỗi ngày', collocations: [{ hanzi: '吃饭', pinyin: 'chīfàn', meaning: 'ăn cơm' }, { hanzi: '好吃', pinyin: 'hǎochī', meaning: 'ngon' }], sentences: [{ hanzi: '你吃饭了吗？', pinyin: 'Nǐ chīfàn le ma?', meaning: 'Bạn đã ăn cơm chưa?' }], compound: { word: '好吃', pinyin: 'hǎochī', meaning: 'ngon miệng', sentence: '越南河粉非常___！', full: '越南河粉非常好吃！', vi: 'Phở Việt Nam vô cùng ngon!' } },
        { char: '喝', pinyin: 'hē', hanviet: 'HÁT', meaning: 'Uống', level: 'HSK 2', strokeCount: 12, radicals: [{ text: '口', title: 'Miệng' }], story: 'Khát nước (曷) thì dùng miệng (口) để uống', collocations: [{ hanzi: '喝茶', pinyin: 'hē chá', meaning: 'uống trà' }, { hanzi: '喝水', pinyin: 'hē shuǐ', meaning: 'uống nước' }], sentences: [{ hanzi: '早上我喜欢喝咖啡。', pinyin: 'Zǎoshang wǒ xǐhuan hē kāfēi.', meaning: 'Buổi sáng tôi thích uống cà phê.' }], compound: { word: '喝水', pinyin: 'hē shuǐ', meaning: 'uống nước', sentence: '运动后要多___。', full: '运动后要多喝水。', vi: 'Sau khi vận động cần uống nhiều nước.' } },
        { char: '问', pinyin: 'wèn', hanviet: 'VẤN', meaning: 'Hỏi, thăm hỏi', level: 'HSK 2', strokeCount: 6, radicals: [{ text: '门', title: 'Cửa' }, { text: '口', title: 'Miệng' }], story: 'Đứng trước cửa (门) mở miệng (口) hỏi thăm', collocations: [{ hanzi: '问题', pinyin: 'wèntí', meaning: 'câu hỏi, vấn đề' }], sentences: [{ hanzi: '我有一个问题。', pinyin: 'Wǒ yǒu yí gè wèntí.', meaning: 'Tôi có một câu hỏi.' }], compound: { word: '请问', pinyin: 'qǐngwèn', meaning: 'xin hỏi', sentence: '___您贵姓？', full: '请问您贵姓？', vi: 'Xin hỏi quý danh của ngài là gì ạ?' } },
        { char: '看', pinyin: 'kàn', hanviet: 'KHÁN', meaning: 'Nhìn, xem, đọc', level: 'HSK 2', strokeCount: 9, radicals: [{ text: '手', title: 'Tay' }, { text: '目', title: 'Mắt' }], story: 'Đưa bàn tay (手) lên che nắng trên mắt (目) để nhìn xa', collocations: [{ hanzi: '看书', pinyin: 'kànshū', meaning: 'đọc sách' }, { hanzi: '好看', pinyin: 'hǎokàn', meaning: 'đẹp' }], sentences: [{ hanzi: '这本小说很好看。', pinyin: 'Zhè běn xiǎoshuō hěn hǎokàn.', meaning: 'Cuốn tiểu thuyết này rất hay.' }], compound: { word: '看见', pinyin: 'kànjiàn', meaning: 'nhìn thấy', sentence: '我___彩虹了！', full: '我看见彩虹了！', vi: 'Tôi nhìn thấy cầu vồng rồi!' } }
      ]
    }
  ],

  hsk3: [
    {
      id: 'hsk3_l1',
      title: 'Bài 1 • Bình an & Cảm xúc',
      desc: 'Diễn tả tâm trạng vui vẻ, yên bình và bốn mùa',
      words: [
        { char: '安', pinyin: 'ān', hanviet: 'AN', meaning: 'Bình an, yên tĩnh', level: 'HSK 3', strokeCount: 6, radicals: [{ text: '宀', title: 'Mái nhà' }, { text: '女', title: 'Phụ nữ' }], story: 'Người phụ nữ (女) ở dưới mái nhà (宀) che chở là bình an', collocations: [{ hanzi: '安全', pinyin: 'ānquán', meaning: 'an toàn' }, { hanzi: '安静', pinyin: 'ānjìng', meaning: 'yên tĩnh' }], sentences: [{ hanzi: '祝你一路平安！', pinyin: 'Zhù nǐ yílù píngān!', meaning: 'Chúc bạn thượng lộ bình an!' }], compound: { word: '安心', pinyin: 'ānxīn', meaning: 'yên tâm', sentence: '请你___工作。', full: '请你安心工作。', vi: 'Bạn hãy yên tâm làm việc.' } },
        { char: '心', pinyin: 'xīn', hanviet: 'TÂM', meaning: 'Trái tim, tâm trí', level: 'HSK 3', strokeCount: 4, radicals: [{ text: '心', title: 'Tim' }], story: 'Ba nhịp đập quanh buồng tim sống động', collocations: [{ hanzi: '开心', pinyin: 'kāixīn', meaning: 'vui vẻ' }, { hanzi: '放心', pinyin: 'fàngxīn', meaning: 'yên tâm' }], sentences: [{ hanzi: '今天我很开心！', pinyin: 'Jīntiān wǒ hěn kāixīn!', meaning: 'Hôm nay tôi rất vui!' }], compound: { word: '开心', pinyin: 'kāixīn', meaning: 'vui vẻ', sentence: '笑口常开，每天___！', full: '笑口常开，每天开心！', vi: 'Luôn mỉm cười, mỗi ngày đều vui!' } },
        { char: '开', pinyin: 'kāi', hanviet: 'KHAI', meaning: 'Mở ra, bắt đầu, nở rộ', level: 'HSK 3', strokeCount: 4, radicals: [{ text: '廾', title: 'Hai tay' }], story: 'Hai bàn tay kéo thanh chắn ngang để mở cánh cổng lớn', collocations: [{ hanzi: '开始', pinyin: 'kāishǐ', meaning: 'bắt đầu' }, { hanzi: '开心', pinyin: 'kāixīn', meaning: 'vui vẻ' }], sentences: [{ hanzi: '电影快开始了。', pinyin: 'Diànyǐng kuài kāishǐ le.', meaning: 'Bộ phim sắp bắt đầu rồi.' }], compound: { word: '开门', pinyin: 'kāimén', meaning: 'mở cửa', sentence: '请帮我___。', full: '请帮我开门。', vi: 'Làm ơn giúp tôi mở cửa.' } },
        { char: '春', pinyin: 'chūn', hanviet: 'XUÂN', meaning: 'Mùa xuân, sức sống', level: 'HSK 3', strokeCount: 9, radicals: [{ text: '日', title: 'Mặt trời' }], story: 'Nắng ấm mặt trời (日) đánh thức chồi non vươn dậy mùa xuân', collocations: [{ hanzi: '春天', pinyin: 'chūntiān', meaning: 'mùa xuân' }, { hanzi: '春节', pinyin: 'Chūnjié', meaning: 'Tết Nguyên Đán' }], sentences: [{ hanzi: '春天来了，花开了。', pinyin: 'Chūntiān lái le, huā kāi le.', meaning: 'Mùa xuân đến rồi, hoa nở rồi.' }], compound: { word: '春天', pinyin: 'chūntiān', meaning: 'mùa xuân', sentence: '我最喜欢___。', full: '我最喜欢春天。', vi: 'Tôi thích nhất là mùa xuân.' } }
      ]
    }
  ],

  hsk4: [
    {
      id: 'hsk4_l1',
      title: 'Bài 1 • Tình yêu & Hoài bão',
      desc: 'Những chữ giàu chiều sâu triết lý nhân sinh HSK 4',
      words: [
        { char: '爱', pinyin: 'ài', hanviet: 'ÁI', meaning: 'Yêu thương, trân quý', level: 'HSK 4', strokeCount: 10, radicals: [{ text: '爫', title: 'Tay nâng niu' }, { text: '友', title: 'Tri kỷ' }], story: 'Đôi tay nâng niu người bạn tri kỷ bằng cả tấm lòng', collocations: [{ hanzi: '爱情', pinyin: 'àiqíng', meaning: 'tình yêu' }, { hanzi: '可爱', pinyin: 'kěài', meaning: 'đáng yêu' }], sentences: [{ hanzi: '爱是最美的语言。', pinyin: 'Ài shì zuì měi de yǔyán.', meaning: 'Tình yêu là ngôn ngữ đẹp nhất.' }], compound: { word: '爱心', pinyin: 'àixīn', meaning: 'lòng nhân ái', sentence: '她是一个很有___的人。', full: '她是一个很有爱心的人。', vi: 'Cô ấy là một người giàu lòng nhân ái.' } },
        { char: '梦', pinyin: 'mèng', hanviet: 'MỘNG', meaning: 'Giấc mơ, ước mơ', level: 'HSK 4', strokeCount: 11, radicals: [{ text: '林', title: 'Rừng cây' }, { text: '夕', title: 'Hoàng hôn' }], story: 'Ánh trăng chiều (夕) buông trên cánh rừng (林) gợi mở giấc mộng đẹp', collocations: [{ hanzi: '梦想', pinyin: 'mèngxiǎng', meaning: 'ước mơ' }], sentences: [{ hanzi: '勇敢追求自己的梦想。', pinyin: 'Yǒnggǎn zhuīqiú zìjǐ de mèngxiǎng.', meaning: 'Dũng cảm theo đuổi ước mơ của mình.' }], compound: { word: '美梦', pinyin: 'měimèng', meaning: 'giấc mơ đẹp', sentence: '祝你今晚做个___！', full: '祝你今晚做个美梦！', vi: 'Chúc bạn tối nay có một giấc mơ đẹp!' } },
        { char: '美', pinyin: 'měi', hanviet: 'MỸ', meaning: 'Đẹp đẽ, tốt lành', level: 'HSK 4', strokeCount: 9, radicals: [{ text: '羊', title: 'Con dê' }, { text: '大', title: 'To lớn' }], story: 'Đàn cừu béo tốt (羊 + 大) tượng trưng cho sự sung túc và cái đẹp', collocations: [{ hanzi: '美丽', pinyin: 'měilì', meaning: 'tươi đẹp' }, { hanzi: '美好', pinyin: 'měihǎo', meaning: 'tốt đẹp' }], sentences: [{ hanzi: '生活多么美好！', pinyin: 'Shēnghuó duōme měihǎo!', meaning: 'Cuộc sống tươi đẹp biết bao!' }], compound: { word: '美好', pinyin: 'měihǎo', meaning: 'tốt đẹp', sentence: '祝你有___的一天！', full: '祝你有美好的一天！', vi: 'Chúc bạn có một ngày thật tốt đẹp!' } }
      ]
    }
  ],

  hsk5: [
    {
      id: 'hsk5_l1',
      title: 'Bài 1 • Phúc lộc & Trí tuệ',
      desc: 'Từ vựng văn hóa truyền thống & xã hội trung-cao cấp',
      words: [
        { char: '福', pinyin: 'fú', hanviet: 'PHÚC', meaning: 'Hạnh phúc, phúc đức', level: 'HSK 5', strokeCount: 13, radicals: [{ text: '礻', title: 'Lễ phúc' }, { text: '田', title: 'Ruộng vườn' }], story: 'Có mái ấm, có người thương (口) và ruộng vườn (田) chính là Phúc', collocations: [{ hanzi: '幸福', pinyin: 'xìngfú', meaning: 'hạnh phúc' }], sentences: [{ hanzi: '祝你永远幸福！', pinyin: 'Zhù nǐ yǒngyuǎn xìngfú!', meaning: 'Chúc bạn mãi mãi hạnh phúc!' }], compound: { word: '祝福', pinyin: 'zhùfú', meaning: 'chúc phúc', sentence: '送上我最真挚的___。', full: '送上我最真挚的祝福。', vi: 'Gửi đến bạn lời chúc phúc chân thành nhất.' } },
        { char: '知', pinyin: 'zhī', hanviet: 'TRI', meaning: 'Biết, tri thức', level: 'HSK 5', strokeCount: 8, radicals: [{ text: '矢', title: 'Mũi tên' }, { text: '口', title: 'Lời nói' }], story: 'Lời nói (口) nhanh và trúng đích như mũi tên (矢) là người hiểu biết', collocations: [{ hanzi: '知识', pinyin: 'zhīshi', meaning: 'kiến thức' }, { hanzi: '知道', pinyin: 'zhīdào', meaning: 'biết' }], sentences: [{ hanzi: '知识就是力量。', pinyin: 'Zhīshi jiù shì lìliàng.', meaning: 'Tri thức chính là sức mạnh.' }], compound: { word: '知心', pinyin: 'zhīxīn', meaning: 'tri tâm, hiểu lòng', sentence: '他是我的___朋友。', full: '他是我的知心朋友。', vi: 'Anh ấy là bạn tri kỷ hiểu lòng tôi.' } }
      ]
    }
  ],

  hsk6: [
    {
      id: 'hsk6_l1',
      title: 'Bài 1 • Khí phách Á Đông',
      desc: 'Chữ Hán biểu trưng cho văn hóa, lịch sử và nghệ thuật',
      words: [
        { char: '龙', pinyin: 'lóng', hanviet: 'LONG', meaning: 'Con rồng, khí phách', level: 'HSK 6', strokeCount: 5, radicals: [{ text: '龙', title: 'Rồng' }], story: 'Dáng rồng uốn lượn bay vút lên tầng mây', collocations: [{ hanzi: '龙舟', pinyin: 'lóngzhōu', meaning: 'thuyền rồng' }], sentences: [{ hanzi: '龙是东方文化的象征。', pinyin: 'Lóng shì dōngfāng wénhuà de xiàngzhēng.', meaning: 'Rồng là biểu tượng của văn hóa phương Đông.' }], compound: { word: '巨龙', pinyin: 'jùlóng', meaning: 'rồng lớn', sentence: '长城像一条___。', full: '长城像一条巨龙。', vi: 'Vạn Lý Trường Thành giống như một con rồng lớn.' } },
        { char: '道', pinyin: 'dào', hanviet: 'ĐẠO', meaning: 'Con đường, đạo lý', level: 'HSK 6', strokeCount: 12, radicals: [{ text: '辶', title: 'Bước đi' }, { text: '首', title: 'Đầu' }], story: 'Dùng trí tuệ dẫn đầu (首) trên từng bước chân đi (辶) tạo thành Đạo', collocations: [{ hanzi: '道理', pinyin: 'dàolǐ', meaning: 'đạo lý, lẽ phải' }], sentences: [{ hanzi: '你说得很有道理。', pinyin: 'Nǐ shuō de hěn yǒu dàolǐ.', meaning: 'Bạn nói rất có lý.' }], compound: { word: '知道', pinyin: 'zhīdào', meaning: 'biết rõ', sentence: '我___这件事了。', full: '我知道这件事了。', vi: 'Tôi biết chuyện này rồi.' } }
      ]
    }
  ],

  hsk79: [
    {
      id: 'hsk79_l1',
      title: 'Bài 1 • Thành ngữ Tứ Tự Kinh Điển',
      desc: 'Tinh hoa 4 chữ cô đọng trí tuệ ngàn năm',
      words: [
        { char: '成', pinyin: 'chéng', hanviet: 'THÀNH', meaning: 'Thành công, hoàn thành', level: 'HSK 7–9', strokeCount: 6, radicals: [{ text: '戈', title: 'Binh khí' }], story: 'Kiên định rèn giũa đến cùng sẽ gặt hái thành tựu', collocations: [{ hanzi: '成功', pinyin: 'chénggōng', meaning: 'thành công' }, { hanzi: '梦想成真', pinyin: 'mèngxiǎng chéngzhēn', meaning: 'ước mơ thành sự thật' }], sentences: [{ hanzi: '祝你马到成功！', pinyin: 'Zhù nǐ mǎdào chénggōng!', meaning: 'Chúc bạn mã đáo thành công!' }], compound: { word: '成真', pinyin: 'chéngzhēn', meaning: 'thành sự thật', sentence: '愿你早日梦想___！', full: '愿你早日梦想成真！', vi: 'Chúc ước mơ của bạn sớm thành hiện thực!' } },
        { char: '真', pinyin: 'zhēn', hanviet: 'CHÂN', meaning: 'Chân thật, thực sự', level: 'HSK 7–9', strokeCount: 10, radicals: [{ text: '目', title: 'Mắt' }], story: 'Nhìn thẳng bằng đôi mắt (目) ngay chính để thấy sự thật', collocations: [{ hanzi: '认真', pinyin: 'rènzhēn', meaning: 'nghiêm túc, chăm chỉ' }], sentences: [{ hanzi: '他学习非常认真。', pinyin: 'Tā xuéxí fēicháng rènzhēn.', meaning: 'Anh ấy học tập vô cùng nghiêm túc.' }], compound: { word: '天真', pinyin: 'tiānzhēn', meaning: 'hồn nhiên, ngây thơ', sentence: '孩子们的笑容很___。', full: '孩子们的笑容很天真。', vi: 'Nụ cười của lũ trẻ thật hồn nhiên.' } }
      ]
    }
  ]
};

// 10 High-Value Pinyin & Tone Listening Reflex Challenges for Vietnamese Learners
window.JIANGZI_PINYIN_QUIZ = [
  {
    speak: '爸',
    prompt: 'Nghe kỹ xem đây là âm KHÔNG bật hơi hay BẬT hơi?',
    correct: 'bà (爸 - bố)',
    options: ['bà (爸 - bố)', 'pà (怕 - sợ)'],
    tip: 'Chữ "b" mím môi mở nhẹ không đẩy hơi mạnh; còn "p" bật hơi mạnh ra ngoài.'
  },
  {
    speak: '吃',
    prompt: 'Âm đầu lưỡi uốn này có bật hơi mạnh không?',
    correct: 'chī (吃 - ăn)',
    options: ['zhī (知 - biết)', 'chī (吃 - ăn)', 'shī (诗 - thơ)'],
    tip: '"ch" vừa uốn cong lưỡi vừa bật luồng hơi mạnh (giống tr + bật hơi).'
  },
  {
    speak: '请',
    prompt: 'Phân biệt bộ ba âm mặt lưỡi j / q / x:',
    correct: 'qǐng (请 - xin mời)',
    options: ['jǐng (井 - giếng)', 'qǐng (请 - xin mời)', 'xǐng (醒 - tỉnh)'],
    tip: '"q" đặt mặt lưỡi sát vòm cứng như "j" nhưng đẩy hơi bật mạnh ra.'
  },
  {
    speak: '马',
    prompt: 'Chữ "ma" bạn vừa nghe mang THANH MẤY?',
    correct: 'mǎ • Thanh 3 (Con ngựa)',
    options: ['mā • Thanh 1 (Mẹ)', 'má • Thanh 2 (Tê)', 'mǎ • Thanh 3 (Con ngựa)', 'mà • Thanh 4 (Mắng)'],
    tip: 'Thanh 3 (∨) hạ giọng xuống trầm sâu rồi mới uốn nhẹ lên cuối âm.'
  },
  {
    speak: '骂',
    prompt: 'Chữ "ma" dứt khoát này mang THANH MẤY?',
    correct: 'mà • Thanh 4 (Mắng)',
    options: ['mā • Thanh 1 (Cao ngang)', 'má • Thanh 2 (Đi lên)', 'mǎ • Thanh 3 (Trầm uốn)', 'mà • Thanh 4 (Mắng)'],
    tip: 'Thanh 4 (↘) bắt đầu cao rồi giáng mạnh dứt khoát xuống thấp.'
  },
  {
    speak: '特',
    prompt: 'Phân biệt cặp âm đầu lưỡi d / t:',
    correct: 'tè (特 - đặc biệt)',
    options: ['dè (得)', 'tè (特 - đặc biệt)'],
    tip: '"t" đọc gần giống chữ "th" tiếng Việt nhưng bật luồng hơi mạnh hơn.'
  },
  {
    speak: '十',
    prompt: 'Âm sibilant này là uốn lưỡi (sh) hay thẳng lưỡi (s)?',
    correct: 'shí (十 - số 10)',
    options: ['shí (十 - số 10)', 'sì (四 - số 4)'],
    tip: 'shí (10) uốn cong lưỡi và đi lên Thanh 2; sì (4) thẳng lưỡi và giáng Thanh 4.'
  },
  {
    speak: '学',
    prompt: 'Nguyên âm tròn môi đi sau "x" ở đây là gì?',
    correct: 'xué (学 - học tập)',
    options: ['xié (鞋 - giày)', 'xué (学 - học tập)'],
    tip: 'Sau j, q, x thì chữ "u" thực chất là âm tròn môi "ü" (xué đọc tròn môi "xuy-ế").'
  }
];


// ============================================================================
// SMART CURRICULUM HYDRATOR: MERGES 214 RADICALS + 50 HSK1 LESSONS + HSK 2-9
// ============================================================================
(function hydrateFullCurriculum() {
  const richCharMap = new Map();
  Object.values(window.JIANGZI_LESSONS || {}).forEach(lessons => {
    lessons.forEach(ls => {
      (ls.words || []).forEach(w => {
        if (!richCharMap.has(w.char)) richCharMap.set(w.char, w);
      });
    });
  });

  function hydrateWordTuple(tuple, levelLabel) {
    const ch = [...String(tuple[0] || '')][0] || '一';
    const py = tuple[1] || '';
    const hv = tuple[2] || '';
    const mn = tuple[3] || '';
    const sampleRaw = tuple[4] || `${ch}|${py}|${mn}`;
    const parts = sampleRaw.split('|');
    const cWord = parts[0] || ch;
    const cPy = parts[1] || py;
    const cMn = parts[2] || mn;

    const existing = richCharMap.get(ch);
    const meta = (window.JIANGZI_CHAR_META && window.JIANGZI_CHAR_META[ch]) || null;
    if (existing) {
      return {
        ...existing,
        level: levelLabel,
        strokeCount: meta ? meta.c : existing.strokeCount,
        strokeNames: (existing.strokeNames && existing.strokeNames.length) ? existing.strokeNames : (meta ? meta.sn : [])
      };
    }

    const radObj = (meta && meta.r)
      ? { text: meta.r[0], title: meta.r[1] }
      : { text: ch, title: hv };

    const smartStory = (meta && meta.r && meta.r[0] !== ch)
      ? `Gốc bộ ${meta.r[0]} (${meta.r[1]}) • Hán Việt "${hv}" → Ghép: ${cWord} (${cPy} - ${cMn})`
      : (levelLabel === '214 Bộ thủ'
          ? `Bộ thủ "${hv}" (${mn}) → Gặp trong từ: ${cWord} (${cPy} - ${cMn})`
          : `Hán Việt "${hv}" (${mn}) → Từ hay dùng: ${cWord} (${cPy} - ${cMn})`);

    return {
      char: ch,
      pinyin: py,
      hanviet: hv,
      meaning: mn,
      level: levelLabel,
      strokeCount: meta ? meta.c : 6,
      radicals: [radObj],
      story: smartStory,
      strokeNames: meta ? meta.sn : [],
      collocations: [{ hanzi: cWord, pinyin: cPy, meaning: cMn }],
      sentences: [{ hanzi: `“${cWord}”这个词很常用。`, pinyin: `"${cPy}" zhège cí hěn chángyòng.`, meaning: `Từ “${cWord}” (${cMn}) rất thông dụng trong giao tiếp.` }],
      compound: {
        word: cWord,
        pinyin: cPy,
        meaning: cMn,
        sentence: `“___”这个词很常用。`,
        full: `“${cWord}”这个词很常用。`,
        vi: `Từ “${cWord}” (${cMn}) rất thông dụng.`
      }
    };
  }

  // 1. Hydrate ALL 214 Kangxi Radicals -> 36 Progressive Lessons (6 radicals per lesson)
  if (Array.isArray(window.JIANGZI_RAW_RADICALS)) {
    const radLessons = [];
    const chunkSize = 6;
    for (let i = 0; i < window.JIANGZI_RAW_RADICALS.length; i += chunkSize) {
      const slice = window.JIANGZI_RAW_RADICALS.slice(i, i + chunkSize);
      const lNum = Math.floor(i / chunkSize) + 1;
      const preview = slice.map(t => t[0]).join(' ');
      radLessons.push({
        id: `rad_full_${lNum}`,
        title: `Bài ${lNum} • Bộ thủ ${i + 1}–${i + slice.length}`,
        desc: `Nhóm bộ thủ: ${preview}`,
        words: slice.map(t => hydrateWordTuple(t, '214 Bộ thủ'))
      });
    }
    window.JIANGZI_LESSONS.radicals = radLessons;
  }

  // 2. Hydrate ALL 50 HSK 1 Lessons (300 Standard HSK 1 Characters)
  if (Array.isArray(window.JIANGZI_RAW_HSK1_LESSONS)) {
    window.JIANGZI_LESSONS.hsk1 = window.JIANGZI_RAW_HSK1_LESSONS.map((entry, idx) => {
      const title = entry[0];
      const tuples = entry[1] || [];
      const preview = tuples.map(t => t[0]).join(' • ');
      return {
        id: `hsk1_full_${idx + 1}`,
        title: title,
        desc: `Chữ trọng tâm: ${preview}`,
        words: tuples.map(t => hydrateWordTuple(t, 'HSK 1'))
      };
    });
  }

  // 3. Hydrate HSK 2 -> HSK 7-9 Multi-Lesson Progressions (prepend showcase lessons + append bank lessons without duplicate chars)
  if (window.JIANGZI_RAW_HIGHER_HSK) {
    const levelNames = {
      hsk2: 'HSK 2',
      hsk3: 'HSK 3',
      hsk4: 'HSK 4',
      hsk5: 'HSK 5',
      hsk6: 'HSK 6',
      hsk79: 'HSK 7–9'
    };
    Object.entries(window.JIANGZI_RAW_HIGHER_HSK).forEach(([deckId, rawList]) => {
      const baseLessons = window.JIANGZI_LESSONS[deckId] || [];
      const seenChars = new Set();
      const merged = [];

      baseLessons.forEach((ls, idx) => {
        ls.words.forEach(w => seenChars.add(w.char));
        merged.push({
          ...ls,
          id: `${deckId}_full_${merged.length + 1}`,
          title: `Bài ${merged.length + 1} • ${ls.title.split('•').slice(1).join('•').trim() || ls.title}`
        });
      });

      rawList.forEach(entry => {
        const rawTitle = (entry[0].split('•')[1] || entry[0]).trim();
        const tuples = (entry[1] || []).filter(t => {
          const c = [...String(t[0] || '')][0];
          if (!c || seenChars.has(c)) return false;
          seenChars.add(c);
          return true;
        });
        if (tuples.length >= 2) {
          const lNum = merged.length + 1;
          merged.push({
            id: `${deckId}_full_${lNum}`,
            title: `Bài ${lNum} • ${rawTitle}`,
            desc: `Chữ trọng tâm: ${tuples.map(t => t[0]).join(' • ')}`,
            words: tuples.map(t => hydrateWordTuple(t, levelNames[deckId] || deckId.toUpperCase()))
          });
        }
      });

      window.JIANGZI_LESSONS[deckId] = merged;
    });
  }
})();
