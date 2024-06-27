const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "...",
  description: "goibot",
  commandCategory: "Hệ Thống",
  usages: "noprefix",
  cooldowns: 0,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["Anh Giàu! : Mẫu câu tự giới thiệu ngắn gọn , súc tích nhưng dễ đi vào lòng người dành cho các bạn nam","Giọng zai Hà Nội : Là âm thanh ấm hơn cả cái lò sưởi, tuy nghe có vẻ hơi đểu nhưng rất cuốn","Tin thôi đừng tin quá : Câu thần chủ trong tình yêu giúp bạn giảm thiểu rủi ro bị tổn thương bị cắm sừng","Nhầm to : Là khi bạn nghĩ người nhắn tin thâu đêm suốt sáng với bạn đang thích bạn. Không tại người ta rảnh thôi","Điều đáng sợ nhất trong tình yêu : Là khi bạn nhận ra chẳng có chút ''tình yêu'' nào trong cái tình yêu mà bạn vẫn nghĩ đó là tình yêu","Công an : Là người duy nhất hết tôi cho đến thời điểm này","Ba phải : Là để mô tả những người mỗi khi đọc hay xem thứ gì liên quan đến yêu đường, ngôn tình là muốn có người yêu, sau đấy thì chả có cảm giác gi nữa, chỉ muốn độc thân vui tinh","Thả thính dự phòng : Là hành động của mấy bạn trai lúc thì nhắn tin nồng nhiệt, lúc thì bơ bạn như người vô hình","Thất tình : Là cách tốt nhất để có động lực tự nâng cấp bản thân lên một phiên bản tốt hơn","Khinh người : Tiếng oan của mấy đứa bị cận","Xin lỗi! Được Chưa? : Là lời xin lỗi của những người dù miệng xin lỗi nhưng lòng vẫn không can tâm","Bạn thân : Là đứa giúp bạn đưa ra nhiều quyết định, ví dụ như ăn gì, ở đâu, có nên quen người này, có nên chia tay bạn trai, mua cái này hay mua cái váy kia...","Uổng : Dành cho những người đẹp mà không có ai yêu","Real Love : Là thứ nghe thì nhiều mà chưa thấy bao giờ","Lép : Là tình trạng mang lại cho bạn cảm giác mãi mãi ở tuổi thanh xuân","Váy Chống Nắng : Là thứ dùng với công dụng chống nắng thì ít, che cái chân ghẻ thì nhiều","Sáng Chấn Tâm Lý : Khi bạn cố gắng tập thể dục ăn kiêng","Đạo Lông Mày : Là đạo của những đứa ra đường là phải kẻ lông mày, không cần biết đi đâu gặp ai","0 : Là số người yêu cũ mà tính đến hiện tại tôi có được. Vì người yêu tôi còn chả có thì lấy đâu ra người yêu cũ","Oan : Khi thậm chí cả một thời gian không có ai inbox nhưng người ta vẫn đồn bạn có nhiều người thích nhưng kén chọn nên ế","Rủ crush đi nhậu : Chiêu tán tỉnh Crush hiệu quả hơn cả rủ Crush đi trà sữa, cà phê","Ứng dụng nhắn tin : Là công cụ để chúng ta giao tiếp với nhau, không phải là thứ bạn phụ thuộc hoàn toàn để có thể đánh giá tình cảm, sự chân thành hay sự quan tâm của người khác","Con gái đi tắm : Vào nhà tắm, sau đó soi gương nặn mun, nhìn ngắm khuôn mặt ở mọi góc cạnh, tạo tám chục cái biểu cảm rồi mới tắm. Sau đó mặc đồ và tiếp tục ngắm mình trong gương rồi mới bước ra khỏi phòng tắm","Dọn nhà : Là hành động giúp bỗng dưng thấy món đồ mà trước đây bạn có lật tung cả nhà cũng tìm không ra","Thoải mái : Cảm giác vừa trở về phòng sau một ngày dài, lột chiếc áo ngực ra và nằm sải lai trên giường bấm điện thoại","Có sức 'hút' : Là đặc điểm của một cô gái thích uống trà sữa nhiều trân châu và thật nhiều topping","Anh sẽ không bao giờ đồng ý chia tay : Là câu nói của người yêu cũ mà mỗi lần nghĩ lại tôi đều cười đ** thở được luôn ấy","Khoảng cách xa nhất trên Trái Đất này : Là khoảng cách giữa 2 người đang nhắn tin với nhau mà không biết nói gì, cuộc nói chuyện vô cùng nhạt nhẽo nhưng vẫn cố duy trì bằng icon, sticker","Tuyệt vời : Cảm giác khi có bố mẹ tâm lý ủng hộ cuộc sống độc thân vui vẻ của mình, không hối thúc có người yêu hay lập gia đình","Make up kiểu người lười : Chỉ cần kẻ chút lông mày, tô son vào là xong","Ước mơ giản dị : Sau một ngày làm việc mệt mỏi, trờ về nhà có người nâu cơm cho ăn, không phải suy nghĩ hôm nay ăn gì, ở đâu","Con ghẻ : Là đứa đường đường chính chính là con cái trong nhà nhưng lại không được bố mẹ cừng bằng con Pet","Vừa đấm vừa xoa : Hành động của mấy người hay chê mình mập nhưng lại cứ hay rủ đi ăn hoặc mua quá trời đồ ăn cho mình","Chơi một mình đi : Là lời khuyên dành cho mấy đứa hay đi chọc cho người khác tức điên rồi bảo 'zui zẻ hông quạu'. Ủa ủa? Hông thây zui tẹo nào luôn á","Thách thức : Đi ngủ trước 11h khuya và thức dậy trước khi 6h sáng","Da đẹp : Là kết quả của bảy bảy bốn chín bước skin care và app chụp hình Ulike,Face u, Soda, ...","Duyên âm : Là cái cớ biện minh cho cái sự ế chỏng ế chơ của bạn","Ngứa mắt : Là cảm giác khi thấy đứa nợ tiền mình chưa trả mà lại check in sang chảnh, đập hộp đồ mới","Chán : Buồn như chó đăng cái tus mong bạn bè an ủi thì chúng nó rủ nhau vào thả haha một lượt","Dễ tính : Tính cách của những người cho ăn thì ăn, không cho ăn thì ăn","Bất công : Da của cái đứa thực hiện đủ các kiểu skin care xấu hơn da của cái đứa chỉ dùng mỗi sữa rửa mặt","Hè lớp 9 : Là mùa hè chứng kiến sự thay đổi đáng kể về chiều cao của các bạn trong lớp","Duyên chưa tới : Là lý do cho cái sự ế có thâm niên mà chính bạn cũng không hiểu vì sao mình có thể ế được","Comment dạo : Việc khiến người ta vừa làm vừa lo lắng vì sợ đám bạn thân nhìn thấy vào thả haha","Kém tinh tế : Là cụm từ dành cho Crush mình. Trong khi mình đã cố tình đăng thật nhiều story nhưng bạn ý vẫn không biết đường rep story, inbox mình","Vì yêu cứ đâm đầu : Dù bị block ở Facebook, Messenger nhưng vẫn cố nhắn tin cho người ấy qua Zalo,Instagram, thậm chí là Email","Gương nhà tắm : Là thứ khiến ta bị ảo tưởng về nhan sắc mình","Tin tưởng : Cảm giác dành cho người mà nói tạm biệt để đi ngủ là đi ngủ liền, không la cà comment dạo hay nhắn tin với người khác","Vợ? Chồng : Là người minh đang gửi ở nhà ba má vợ/chồng, khi nào tiện mình sẽ đón về, bà con họ hàng và nhất la bác hàng xóm đừng hỏi nữa nha!","Mối quan hệ mập mờ : Người đó tỏ ra vô cùng yêu mình nhưng chưa bao giờ nói yêu mình","Tao đang tới : Tao đang lết cái thây lười biếng ra khỏi giường","Bữa nào rảnh cafe nha! : Câu nói của mấy đứa bận suốt đời","FA : Là nhưng chuyên gia trong lĩnh vực tư vấn tâm lý, tình cảm đôi lứa","Vô duyên : Đặc điểm mô tả những người luôn hoang tưởng nghĩ rằng mình hài hước","Size M : Size đồ của những người đẹp từ tâm hồn cho đến ngoại hình, thường được nhiều người thích nhưng khó chọn người yêu","Hả hê : Khi thấy người yêu mới của người yêu cũ xấu hơn mình","Năng lực siêu nhiên : Mỗi lần đi ị xong là sau đó không ai dám vào nhà vệ sinh","Cấm trẻ em dưới 18 tuổi + Đừng nói cho ai biết nha : Những câu nói vô dụng nhất mọi thời đại","Làm vài điếu : Là hành động phản xạ tự nhiên khi tâm trạng tụt dốc không phanh và muốn rớt xuống đất không kịp nhặt","Giáo viên dạy Văn : Người có năng lực siêu nhiên ru ngủ học sinh chỉ trong vài giây","Đồng hồ : Là đồ vật treo trong lóp và được học sinh nhìn nhiều hơn cả bảng","Cắt tóc : Là hành động con gái hay làm khi thất tình, nhưng với một số đứa thì do lười gội chứ làm gì có tình nào để mà thất","Ký ức khó quên : Bữa tối đầy đủ thành viên trong gia đình, cả nhà vừa ăn cơm vừa xem phim chiếu 18h trên VTV3 hoặc xem Thời sự 19h","Sổ đầu bài : Là nơi xuất hiện những cái tên khiến cả lớp bị vạ lây","Vào nhà đi chó không căn đâu : Câu nói dỗi kinh điển mà ai cũng ít nhất 1 lần tin là thật","Cục tẩy : Dụng cụ học tập bí ẩn nhất của học sinh, thường biến mất trước khi được dùng hết","Bất lực : Là cảm giác nhìn nick người ấy sáng mà không dám chủ động nhắn tin","Chân lý : Thà lùn tự nhiên còn hơn cao vì sừng","69 : Là một số tự nhiên có 2 chữ số thôi, trong sáng lên nào các bạn!","Phụ nữ : Là những công an điều tra cấp cao, họ biết tất cả chứng cứ nhưng vẫn cần lời khai. Nếu bạn thành khẩn may ra còn sống","Người lịch sự : Là người không hỏi điểm thi, điểm tổng kết, hay hỏi lương của người khác","Iphone đời mới nhất : Là thứ dù tốt đến mấy cũng không bao giờ có được mình","Sài Gòn : Là nơi có tất cả, nhưng lại không có người thương ta","Em/Anh ăn cơm chưa? : Là câu hỏi mà mục đích của người hỏi không phải là câu trả lời mà họ chỉ cần được rep tin nhắn","Say : Là trạng thái giúp ta có nhiều cam đảm để làm những chuyện mà lúc tỉnh có cho tiền cũng không làm","Bất hạnh : Khi phải hưởng trọn combo lùn + đen + xấu + nghèo","Thính : Là một thứ gì đó vô hình nhưng lại có mùi thơm, khi không có ai thả thì thèm, khi có lại không thèm đớp","Bấm điện thoại : Là nguyên nhân của tất cả các loại bệnh theo quan điểm của mẹ tui","Nghịch duyên : Cố gắng theo đuổi ai đó trong một thời gian dài không được đạp lại. Đến khi mình rung động với người khác rồi thì họ mới bắt đầu thích mình","Thiếu nghị lực : Đang giận nhau đến không thèm nhìn mặt nhưng chỉ cần mời đi ăn là đồng ý liền","Chuyện cổ tích : Bỗng một ngày crush nói thích mình","Con người: phải đến lúc mất đi mới hiểu được nên trân trọng cái gì","Cuộc sống: ko bao giờ là bế tắc thực sự hay có khái niệm mất tất cả một khi bạn còn có niềm tin","Tình yêu : bắt đầu bằng một nụ cười, tiến triển bằng một nụ hôn, kết thúc với một giọt nước mắt hay với vòng tay ôm xiết bất tận"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "Web") || (event.body.toLowerCase() == "web")) {
    return api.sendMessage("Các wed cần thiết của cậu chủ nè\nhttps://yaytext.com/vi/%C4%91%E1%BA%ADm-nghi%C3%AAng\nhttps://lelinhtinh.github.io/de4js/\nhttps://pastebin.com/\nhttps://giphy.com/create/gifmaker\nhttps://kitudep.com/chu-dao-nguoc\nhttps://hentaivip.biz/", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "Ơi")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 bcs có gai nha 😗", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "Ừ")) {
    return api.sendMessage("Ừ à dạ đi bot thương", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "Dạ")) {
    return api.sendMessage("Ngoan vậy làm người yêu bot nha", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("Dạ có việc gì nói mau :3", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "Yêu bot")) {
    return api.sendMessage("Dạ , Bot cũng yêu bot", threadID);
  };

  if ((event.body.toLowerCase() == "nịt") || (event.body.toLowerCase() == "Nịt")) {
    return api.sendMessage("Theo dự tính 5k đổi được 200 cái nịt đấy mua không bán rẻ", threadID);
  };

if ((event.body.toLowerCase() == ":')") || (event.body.toLowerCase() == ":')")) {
    return api.sendMessage(":'l", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "Cứu")) {
    return api.sendMessage("Cúu cc ngu thì chết khôn thì sống cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == ":)") || (event.body.toLowerCase() == "🙂")) {
    return api.sendMessage(":)​", threadID);
  };

  if ((event.body.toLowerCase() == "=)") || (event.body.toLowerCase() == "😊")) {
    return api.sendMessage("=)​", threadID);
  };

  if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == ":(")) {
    return api.sendMessage("️:(​", threadID);
  };

  if ((event.body.toLowerCase() == "=(") || (event.body.toLowerCase() == "=(")) {
    return api.sendMessage("️=(​", threadID);
  };

  if ((event.body.toLowerCase() == ";*") || (event.body.toLowerCase() == "*;")) {
    return api.sendMessage(";*​", threadID);
  };
  
  if ((event.body.toLowerCase() == ":*") || (event.body.toLowerCase() == "😗")) {
    return api.sendMessage(":*​", threadID);
  };
  
  if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😺")) {
    return api.sendMessage("️:D​", threadID);
  };
    if ((event.body.toLowerCase() == "❤") || (event.body.toLowerCase() == "❤")) {
    return api.sendMessage("️<3​", threadID);
  };
   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘")) {
    return api.sendMessage("️:-*​", threadID);
  };
   if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
    return api.sendMessage("️:|]​", threadID);
  };
  if ((event.body.toLowerCase() == "🦈") || (event.body.toLowerCase() == "🦈")) {
    return api.sendMessage("️(^^^)​", threadID);
  };
  if ((event.body.toLowerCase() == "💩") || (event.body.toLowerCase() == "💩")) {
    return api.sendMessage("️:poop:​", threadID);
  };
  if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇")) {
    return api.sendMessage("️O:) ​", threadID);
  };
   if ((event.body.toLowerCase() == " 😈") || (event.body.toLowerCase() == " 😈")) {
    return api.sendMessage("️3:) ​", threadID);
  };
  if ((event.body.toLowerCase() == "  😳") || (event.body.toLowerCase() == "  😳")) {
    return api.sendMessage("️	o.O  ​", threadID);
  };
    if ((event.body.toLowerCase() == " 😎 ") || (event.body.toLowerCase() == " 😎 ")) {
    return api.sendMessage("️	8-|  ​", threadID);
  };
   if ((event.body.toLowerCase() == " 😣 ") || (event.body.toLowerCase() == " 😣 ")) {
    return api.sendMessage("️>.< ​", threadID);
  };
   if ((event.body.toLowerCase() == " :3 ") || (event.body.toLowerCase() == " :3 ")) {
    return api.sendMessage("️:3​", threadID);
  };
  if ((event.body.toLowerCase() == " :v") || (event.body.toLowerCase() == " :v ")) {
    return api.sendMessage("️:v​", threadID);
  };
   if ((event.body.toLowerCase() == " 😭 ") || (event.body.toLowerCase() == " 😭 ")) {
    return api.sendMessage("️T_T ​", threadID);
  };
   if ((event.body.toLowerCase() == " 😠") || (event.body.toLowerCase() == " 😠")) {
    return api.sendMessage("️>:O ​", threadID);
  };
  if ((event.body.toLowerCase() == ":/") || (event.body.toLowerCase() == "😕")) {
    return api.sendMessage(":/​", threadID);
  };
  
  if ((event.body.toLowerCase() == "O:)") || (event.body.toLowerCase() == "😇")) {
    return api.sendMessage("️O:)​", threadID);
  };
  
  if ((event.body.toLowerCase() == ";)") || (event.body.toLowerCase() == "😉")) {
    return api.sendMessage("️;)​", threadID);
  };
  
  if ((event.body.toLowerCase() == ":o") || (event.body.toLowerCase() == "😲")) {
    return api.sendMessage(":o​", threadID);
  };
  
 if ((event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "3:)")) {
    return api.sendMessage("️3:)​", threadID);
  };

  if ((event.body.toLowerCase() == ":|") || (event.body.toLowerCase() == "😐")) {
    return api.sendMessage("️:|​", threadID);
  };

  if ((event.body.toLowerCase() == "-_-") || (event.body.toLowerCase() == "😑")) {
    return api.sendMessage("️-_-​", threadID);
  };

  if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == ":p")) {
    return api.sendMessage("️:p​", threadID);
  };
  
  if ((event.body.toLowerCase() == ":'(") || (event.body.toLowerCase() == "😢")) {
    return api.sendMessage("️:'(​", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

if ((event.body.toLowerCase() == "uwu") || (event.body.toLowerCase() == "UwU")) {
    return api.sendMessage("∐w∐", threadID);
  };

if ((event.body.toLowerCase() == "bot said") || (event.body.toLowerCase() == "Bot said")) {
    return api.sendMessage("Nhảm lồn vừa thôi", threadID);
  };

if ((event.body.toLowerCase() == "như") || (event.body.toLowerCase() == "Như")) {
    return api.sendMessage("Như lồn vậy", threadID);
  };

if ((event.body.toLowerCase() == "#1") || (event.body.toLowerCase() == "#1")) {
    return api.sendMessage("Phát cơm chó hoặc xưng a iu , e iu 3 lần kick ?", threadID);
  };

if ((event.body.toLowerCase() == "#2") || (event.body.toLowerCase() == "#2")) {
    return api.sendMessage("Mỗi admin chỉ được quyền sendnoti cách nhau 30p , nếu vi phạm ban 3 ngày ?", threadID);
  };

if ((event.body.toLowerCase() == "#3") || (event.body.toLowerCase() == "#3")) {
    return api.sendMessage("Admin chửi bot sẽ mất quyền vĩnh viễn ?", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage( msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }