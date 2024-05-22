import Slideshow from "../SliderShow/SliderShow";


import "./home.css"
function Home() {
    return (
        <>
            <div id="homepage">
                <>
                    <Slideshow />
                </>
              <div className="lichkhamnhakhoa">
                <div className="anhdepnhakhoa anhdepnhakhoa1"></div>
                <div className="anhdepnhakhoa anhdepnhakhoa2"></div>

              </div>
                {/* <div className="homepage_img"></div> */}
                <div className="text_sub">

                    <div className="chusub"> <p className="head1"> GIỚI THIỆU PHÒNG KHÁM  </p>
                        <p className="head2"> Nha khoa Thuý Đức  </p>
                        <p className="head3">“An tâm chăm sóc nụ cười bởi chuyên gia quốc tế, trải nghiệm Diamond với công nghệ hiện đại và CSKH thân thiện – chuyên nghiệp” </p>
                        <p className="head3">Với Nha khoa Thuý Đức, mỗi khách hàng đều như người thân – những người mà chúng tôi thấu hiểu và dốc lòng chăm sóc. Đội ngũ bác sĩ và chăm sóc viên cam kết luôn tận tâm và nỗ lực tối ưu hoá quy trình chỉnh nha để mang đến cho khách hàng sự an tâm tuyệt đối khi trải nghiệm dịch vụ. </p>
                        <p className="head3">Chúng tôi không ngừng lắng nghe và ghi nhận chia sẻ từ khách hàng để nâng chuẩn cơ sở vật chất, tay nghề bác sĩ, quy trình tư vấn tận tâm và dốc lòng chăm sóc khách hàng trước, trong và sau dịch vụ.</p>
                    </div>
                    <div className="anh_sub"></div>
                </div>
                <p className="dichvuphongkham"> Dịch vụ tại phòng khám </p>
                <div className="home container">
                    <div className="home_item">
                        <div className="home_item_img home_item_img_1"></div>

                        <div className="home_item_content"><p> Niềng răng mắc cài </p> <br /> Bệnh viện Nha khoa Hà Nội liên tục đầu tư trang thiết bị, mạnh dạn ứng dụng hàng loạt kỹ thuật y học hiện đại.</div>
                    </div>
                    <div className="home_item">
                        <div className="home_item_img home_item_img_2"></div>

                        <div className="home_item_content"> <p> Niềng răng Invisalign </p> <br /> Bệnh viện Nha khoa Hà Nội liên tục đầu tư trang thiết bị, mạnh dạn ứng dụng hàng loạt kỹ thuật y học hiện đại.</div>
                    </div>
                    <div className="home_item">
                        <div className="home_item_img home_item_img_3"></div>

                        <div className="home_item_content"> <p> Điều trị nha chu </p> <br /> Bệnh viện Nha khoa Hà Nội liên tục đầu tư trang thiết bị, mạnh dạn ứng dụng hàng loạt kỹ thuật y học hiện đại.</div>
                    </div>
                    <div className="home_item">
                        <div className="home_item_img home_item_img_4"></div>

                        <div className="home_item_content"> <p> Bọc răng sứ </p> <br /> Bệnh viện Nha khoa Hà Nội liên tục đầu tư trang thiết bị, mạnh dạn ứng dụng hàng loạt kỹ thuật y học hiện đại.</div>
                    </div>
                    <div className="home_item">
                        <div className="home_item_img home_item_img_5"></div>

                        <div className="home_item_content"> <p> Tẩy trắng răng </p> <br /> Bệnh viện Nha khoa Hà Nội liên tục đầu tư trang thiết bị, mạnh dạn ứng dụng hàng loạt kỹ thuật y học hiện đại.</div>
                    </div>
                    <div className="home_item">
                        <div className="home_item_img home_item_img_6"></div>

                        <div className="home_item_content">Bệnh viện Nha khoa Hà Nội liên tục đầu tư trang thiết bị, mạnh dạn ứng dụng hàng loạt kỹ thuật y học hiện đại.</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;