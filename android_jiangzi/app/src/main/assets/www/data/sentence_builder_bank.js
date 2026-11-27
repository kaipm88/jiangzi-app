// JiangZi Conversational Sentence Builder & 10-Second Pocket Grammar Bank
// Real everyday Mandarin sentences aligned with HSK 1-3 lessons + general pool
window.JIANGZI_SENTENCE_CHALLENGES = [
  {
    deck: 'hsk1', lessonIdx: 0,
    vi: 'Xin chào, bạn có khỏe không?',
    pinyin: 'Nǐ hǎo , nǐ hǎo ma ?',
    tokens: ['你好', '，', '你', '好', '吗', '？'],
    distractors: ['我', '不'],
    tip: 'Trợ từ nghi vấn “吗 (ma)” đặt cuối câu trần thuật sẽ biến câu đó thành câu hỏi Có/Không (“...không?”).'
  },
  {
    deck: 'hsk1', lessonIdx: 0,
    vi: 'Chúng tôi đều là bạn tốt.',
    pinyin: 'Wǒmen dōu shì hǎo péngyou .',
    tokens: ['我们', '都', '是', '好', '朋友', '。'],
    distractors: ['吗', '他'],
    tip: 'Phó từ “都 (dōu - đều)” luôn đứng SAU chủ ngữ và đứng TRƯỚC động từ “是 (shì - là)”.'
  },
  {
    deck: 'hsk1', lessonIdx: 1,
    vi: 'Xin hỏi, cái này bao nhiêu tiền?',
    pinyin: 'Qǐngwèn , zhège duōshao qián ?',
    tokens: ['请问', '，', '这个', '多少', '钱', '？'],
    distractors: ['谢谢', '不客气'],
    tip: 'Đặt “请问 (qǐngwèn - xin hỏi)” ở đầu câu giúp lời hỏi lịch sự, tự nhiên như người bản xứ.'
  },
  {
    deck: 'hsk1', lessonIdx: 1,
    vi: 'Cảm ơn bạn, đừng khách sáo!',
    pinyin: 'Xièxie nǐ , bú kèqi !',
    tokens: ['谢谢', '你', '，', '不', '客气', '！'],
    distractors: ['请', '吗'],
    tip: 'Biến điệu chữ “不”: trước thanh 4 như “客 (kè)”, chữ “不 (bù)” đọc lướt lên thành thanh 2 “bú kèqi”.'
  },
  {
    deck: 'hsk1', lessonIdx: 2,
    vi: 'Tôi là người Việt Nam, còn bạn thì sao?',
    pinyin: 'Wǒ shì Yuènán rén , nǐ ne ?',
    tokens: ['我', '是', '越南人', '，', '你', '呢', '？'],
    distractors: ['吗', '了'],
    tip: 'Trợ từ “呢 (ne)” gắn sau đại từ (“你呢 - còn bạn thì sao?”) dùng để hỏi ngược lại câu vừa nêu rất gọn.'
  },
  {
    deck: 'hsk1', lessonIdx: 3,
    vi: 'Nhà tôi có bốn người.',
    pinyin: 'Wǒ jiā yǒu sì kǒu rén .',
    tokens: ['我', '家', '有', '四', '口', '人', '。'],
    distractors: ['是', '不'],
    tip: 'Khi nói số thành viên trong gia đình, người Trung dùng lượng từ “口 (kǒu - nhân khẩu)” thay vì “个”.'
  },
  {
    deck: 'hsk1', lessonIdx: 4,
    vi: 'Hôm nay tôi đi trường học tiếng Trung.',
    pinyin: 'Jīntiān wǒ qù xuéxiào xué Zhōngwén .',
    tokens: ['今天', '我', '去', '学校', '学', '中文', '。'],
    distractors: ['在', '吗'],
    tip: 'Trật tự vàng tiếng Trung: [Thời gian 今天] + [Chủ ngữ 我] + [Đi đâu 去学校] + [Làm gì 学中文].'
  },
  {
    deck: 'hsk1', lessonIdx: 5,
    vi: 'Cho tôi xin một cốc nước ấm nhé.',
    pinyin: 'Qǐng gěi wǒ yì bēi rè shuǐ .',
    tokens: ['请', '给', '我', '一', '杯', '热水', '。'],
    distractors: ['个', '本'],
    tip: 'Giữa số đếm “一 (1)” và danh từ “水 (nước)” bắt buộc phải có lượng từ phù hợp là “杯 (cốc/ly)”.'
  },
  {
    deck: 'hsk1', lessonIdx: 6,
    vi: 'Bố và mẹ tôi đều rất khỏe.',
    pinyin: 'Wǒ bàba hé māma dōu hěn hǎo .',
    tokens: ['我', '爸爸', '和', '妈妈', '都', '很', '好', '。'],
    distractors: ['是', '吗'],
    tip: 'Trong câu tính từ tiếng Trung, thường thêm “很 (hěn)” trước tính từ “好” thay vì dùng “是 (shì - là)”.'
  },
  {
    deck: 'hsk1', lessonIdx: 7,
    vi: 'Ngày mai chúng mình tám giờ gặp nhé!',
    pinyin: 'Wǒmen míngtiān bā diǎn jiàn !',
    tokens: ['我们', '明天', '八点', '见', '！'],
    distractors: ['去', '了'],
    tip: 'Thời gian nói từ LỚN đến NHỎ: Ngày (“明天 - ngày mai”) đứng trước Giờ (“八点 - 8 giờ”), ngược với tiếng Việt!'
  },
  {
    deck: 'general',
    vi: 'Thời tiết hôm nay thật đẹp!',
    pinyin: 'Jīntiān tiānqì zhēn hǎo !',
    tokens: ['今天', '天气', '真', '好', '！'],
    distractors: ['是', '吗'],
    tip: 'Phó từ cảm thán “真 (zhēn - thật là)” đứng trước tính từ để bộc lộ cảm xúc khen ngợi tự nhiên.'
  },
  {
    deck: 'general',
    vi: 'Tôi rất thích uống trà Trung Quốc.',
    pinyin: 'Wǒ hěn xǐhuan hē Zhōngguó chá .',
    tokens: ['我', '很', '喜欢', '喝', '中国', '茶', '。'],
    distractors: ['吃', '看'],
    tip: 'Cụm danh từ định ngữ dịch ngược so với tiếng Việt: “中国茶” = Trà (茶) của Trung Quốc (中国).'
  },
  {
    deck: 'general',
    vi: 'Anh ấy đang đọc sách ở thư viện.',
    pinyin: 'Tā zài túshūguǎn kàn shū .',
    tokens: ['他', '在', '图书馆', '看', '书', '。'],
    distractors: ['去', '了'],
    tip: 'Cụm chỉ nơi chốn “在 + Địa điểm” luôn đứng TRƯỚC động từ hành động (“ở thư viện đọc sách”, không nói “đọc sách ở thư viện”).'
  },
  {
    deck: 'general',
    vi: 'Cuối tuần bạn muốn đi đâu chơi?',
    pinyin: 'Zhōumò nǐ xiǎng qù nǎr wán ?',
    tokens: ['周末', '你', '想', '去', '哪儿', '玩', '？'],
    distractors: ['谁', '什么'],
    tip: 'Động từ năng nguyện “想 (xiǎng - muốn/dự định)” đặt ngay trước động từ chính “去 (đi)”.'
  }
];

// Helper to dynamically build 2 contextual sentence puzzles for ANY lesson (combining curated + lesson vocabulary!)
window.getSentencePuzzlesForLesson = function(deckId, lessonIdx, lessonObj) {
  const bank = window.JIANGZI_SENTENCE_CHALLENGES || [];
  const exact = bank.filter(x => x.deck === deckId && x.lessonIdx === lessonIdx);
  const result = [...exact];

  // Also synthesize a bespoke puzzle directly from the current lesson's real example sentence if needed!
  if (lessonObj && Array.isArray(lessonObj.words)) {
    for (const w of lessonObj.words) {
      if (result.length >= 3) break;
      const s = (w.sentences && w.sentences[0]) || null;
      if (s && s.hanzi && s.hanzi.length >= 4 && !s.hanzi.includes('这个词很常用')) {
        // Segment Chinese sentence cleanly into 2-char collocation chunks + single chars + punctuation
        const collocs = (w.collocations || []).map(c => c.hanzi).filter(h => h.length >= 2);
        let rem = s.hanzi;
        const toks = [];
        while (rem.length > 0) {
          const hit = collocs.find(c => rem.startsWith(c));
          if (hit) {
            toks.push(hit);
            rem = rem.slice(hit.length);
          } else {
            toks.push([...rem][0]);
            rem = rem.slice([...rem][0].length);
          }
        }
        if (toks.length >= 3 && toks.length <= 9) {
          result.push({
            vi: s.meaning,
            pinyin: s.pinyin,
            tokens: toks,
            distractors: ['不', '吗'].filter(d => !toks.includes(d)),
            tip: `Từ khóa trọng tâm “${w.char} (${w.pinyin} - ${w.meaning})” đặt trong ngữ cảnh câu thực tế.`
          });
        }
      }
    }
  }

  // Fill up to 3 puzzles from general grammar gems
  const generals = bank.filter(x => x.deck === 'general');
  let gIdx = (lessonIdx || 0) % generals.length;
  while (result.length < 3 && generals.length > 0) {
    const cand = generals[gIdx % generals.length];
    if (!result.includes(cand)) result.push(cand);
    gIdx++;
  }
  return result.slice(0, 3);
};
