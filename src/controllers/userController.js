const sendMail = require('../utils/sendMail');
const User = require('../models/User');
const UserVerified = require('../models/UserVerified');

class UserController {
	resetPassword = async (req, res) => {
		try {
			const username = req.body.username;
			const email = req.body.email;

			if (email) {
				const user = await User.findOne({ email: email, authType: 'local' });
				if (!user) {
					return res.status(403).json('Email not found');
				}

				await UserVerified.create({
					userId: user._id,
					otp: `https://api-lets-food.cleverapps.io/user/verifyResetPassword/${user._id}`,
					createAt: Date.now(),
				});

				await sendMail(
					user.email,
					'Quên mật khẩu',
					`
            <body style="padding: 0; margin: 0;">
            <div
            class="root"
            style="
               background-color: #ffac4b;
               min-height: 80vh;
               width: 77vw;
               font-family: 'Readex Pro', sans-serif;
            ">
            <div class="main" style="padding-left: 20px; padding-right: 20px; padding-top: 100px;">
               <div
                  class="container"
                  style="
                     max-width: 500px;
                     height: 500px;
                     background-color: #fff9ea;
                     border-radius: 12px;
                     padding: 20px;
                     text-align: center;
                     margin-left: auto;
                     margin-right: auto;
                  ">
                     <div
                        class="logo"
                        style="
                           margin: 0 auto;
                           margin-bottom: 10px;
                        ">
                        <img src="cid:logo" alt="logo" class="img__logo" />
                     </div>
                     <h2
                        class="title"
                        style="
                           font-size: 1.8rem;
                           font-weight: 700;
                           color: #1b1b1b;
                           margin-bottom: 20px;
                        ">
                        Hoàn tất quá trình quên mật khẩu
                     </h2>
                     <div
                        class="line"
                        style="
                           width: 100%;
                           height: 1px;
                           background-color: #1b1b1b;
                           margin-bottom: 20px;
                     "></div>
                     <div class="content" style="margin: 40px 0">
                        <h5
                           class="welcome"
                           style="
                              font-size: 1.2rem;
                              font-weight: 400;
                              color: #1b1b1b;
                              margin-bottom: 20px;
                           ">
                           Xin chào bạn,

                        </h5>
                        <p
                           class="description"
                           style="
                              font-size: 1rem;
                              font-weight: 400;
                              color: #1b1b1b;
                              margin-bottom: 20px;
                           ">
                           Bạn đã yêu cầu đặt lại mật khẩu của mình. Vui lòng nhấp vào nút bên dưới để đặt lại mật khẩu của bạn.:

                        </p>
                        <div class="button" style="margin-top: 40px">
                           <a
                              href="https://api-lets-food.cleverapps.io/user/verifyResetPassword/${user._id}"
                              class="btn"
                              style="
                                    padding: 10px 20px;
                                    background-color: #ffcb45;
                                    border: none;
                                    border-radius: 20px;
                                    font-size: 1rem;
                                    font-weight: 700;
                                    color: #1b1b1b;
                                    cursor: pointer;
                              "
                              >Chuyển đến trang xác nhận</a
                           >
                        </div>
                     </div>
                     <div
                        class="line"
                        style="
                           width: 100%;
                           height: 1px;
                           background-color: #1b1b1b;
                           margin-bottom: 20px;
                        "></div>
                     <p
                        class="footer"
                        style="
                           font-size: 0.8rem;
                           font-weight: 400;
                           color: #1b1b1b;
                           margin-top: 20px;
                        ">
                        Nếu bạn không thực hiện đăng ký, vui lòng bỏ qua email
                        này. Đường dẫn này sẽ hết hạn sau 15 phút.
                     </p>
               </div>
            </div>
      </div></body>`
				);
				return res.status(200).json('Send mail success');
			}

			if (username) {
				const user = await User.findOne({ username: username, authType: 'local' });
				if (!user) {
					return res.status(403).json('Username not found');
				}

				await UserVerified.create({
					userId: user._id,
					otp: `https://api-lets-food.cleverapps.io/user/verifyResetPassword/${user._id}`,
					createAt: Date.now(),
				});

				await sendMail(
					user.email,
					'Quên mật khẩu',
					`
            <body style="padding: 0; margin: 0;">
            <div
            class="root"
            style="
               background-color: #ffac4b;
               min-height: 80vh;
               width: 77vw;
               font-family: 'Readex Pro', sans-serif;
            ">
            <div class="main" style="padding-left: 20px; padding-right: 20px; padding-top: 100px;">
               <div
                  class="container"
                  style="
                     max-width: 500px;
                     height: 500px;
                     background-color: #fff9ea;
                     border-radius: 12px;
                     padding: 20px;
                     text-align: center;
                     margin-left: auto;
                     margin-right: auto;
                  ">
                     <div
                        class="logo"
                        style="
                           margin: 0 auto;
                           margin-bottom: 10px;
                        ">
                        <img src="cid:logo" alt="logo" class="img__logo" />
                     </div>
                     <h2
                        class="title"
                        style="
                           font-size: 1.8rem;
                           font-weight: 700;
                           color: #1b1b1b;
                           margin-bottom: 20px;
                        ">
                        Hoàn tất quá trình quên mật khẩu
                     </h2>
                     <div
                        class="line"
                        style="
                           width: 100%;
                           height: 1px;
                           background-color: #1b1b1b;
                           margin-bottom: 20px;
                     "></div>
                     <div class="content" style="margin: 40px 0">
                        <h5
                           class="welcome"
                           style="
                              font-size: 1.2rem;
                              font-weight: 400;
                              color: #1b1b1b;
                              margin-bottom: 20px;
                           ">
                           Xin chào bạn,

                        </h5>
                        <p
                           class="description"
                           style="
                              font-size: 1rem;
                              font-weight: 400;
                              color: #1b1b1b;
                              margin-bottom: 20px;
                           ">
                           Bạn đã yêu cầu đặt lại mật khẩu của mình. Vui lòng nhấp vào nút bên dưới để đặt lại mật khẩu của bạn.:

                        </p>
                        <div class="button" style="margin-top: 40px">
                           <a
                              href="https://api-lets-food.cleverapps.io/user/verifyResetPassword/${user._id}"
                              class="btn"
                              style="
                                    padding: 10px 20px;
                                    background-color: #ffcb45;
                                    border: none;
                                    border-radius: 20px;
                                    font-size: 1rem;
                                    font-weight: 700;
                                    color: #1b1b1b;
                                    cursor: pointer;
                              "
                              >Chuyển đến trang xác nhận</a
                           >
                        </div>
                     </div>
                     <div
                        class="line"
                        style="
                           width: 100%;
                           height: 1px;
                           background-color: #1b1b1b;
                           margin-bottom: 20px;
                        "></div>
                     <p
                        class="footer"
                        style="
                           font-size: 0.8rem;
                           font-weight: 400;
                           color: #1b1b1b;
                           margin-top: 20px;
                        ">
                        Nếu bạn không thực hiện đăng ký, vui lòng bỏ qua email
                        này. Đường dẫn này sẽ hết hạn sau 15 phút.
                     </p>
               </div>
            </div>
      </div></body>`
				);
				return res.status(200).json('Send mail success');
			}
			if (!username && !email) {
				return res.status(403).json('Please provide username or email');
			}
		} catch (e) {
			return res.status(500).json({ error: e });
		}
	};

	verifyResetPassword = async (req, res) => {
		try {
			const { newPassword } = req.body;
			const { userId } = req.params;

			const user = await User.findById(userId);
			if (!user) {
				return res.status(403).json('User not found');
			}

			await User.updateOne({ _id: userId }, { password: newPassword });

			await UserVerified.deleteOne({ userId: userId });
			return res.status(200).json('Updated password successfully');
		} catch (e) {
			return res.status(500).json({ error: e });
		}
	};

	changePassword = async (req, res) => {
      try {
         const { oldPassword, newPassword } = req.body;
         const { userId } = req.params;

         const user = await User.findById(userId);
         if (!user) {
            return res.status(403).json('User not found');
         }

         const isMatch = await user.validPassword(oldPassword);
         if (!isMatch) {
            return res.status(403).json('Old password is incorrect');
         }

         await User.updateOne({ _id: userId }, { password: newPassword });

         return res.status(200).json('Updated password successfully');
      } catch (e) {
         return res.status(500).json({ error: e });
      }
   };

	getUserProfile = async (req, res) => {
      try {
         const { userId } = req.params;

         const user = await User.findById(userId);
         if (!user) {
            return res.status(403).json('User not found');
         }

         return res.status(200).json(user);
      } catch (e) {
         return res.status(500).json({ error: e });
      }
   };

   updateUserProfile = async (req, res) => {
      try {
         const { userId } = req.params;
         const { firstName, lastName, phone, address } = req.body;

         const user = await User.findById(userId);
         if (!user) {
            return res.status(403).json('User not found');
         }

         await User.updateOne(
            { _id: userId },
            { firstName: firstName, lastName: lastName, phone: phone, address: address }
         );

         return res.status(200).json('Updated profile successfully');
      } catch (e) {
         return res.status(500).json({ error: e });
      }
   };
}

module.exports = new UserController();
