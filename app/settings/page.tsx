import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">系统设置</h2>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">基本设置</TabsTrigger>
          <TabsTrigger value="appearance">外观</TabsTrigger>
          <TabsTrigger value="notifications">通知</TabsTrigger>
          <TabsTrigger value="security">安全</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>基本信息</CardTitle>
              <CardDescription>设置平台的基本信息</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="platform-name">平台名称</Label>
                <Input id="platform-name" defaultValue="交易平台管理系统" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="platform-description">平台描述</Label>
                <Textarea id="platform-description" defaultValue="专业的交易管理平台，提供全面的交易管理功能。" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">联系邮箱</Label>
                <Input id="contact-email" type="email" defaultValue="contact@example.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>保存更改</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>区域设置</CardTitle>
              <CardDescription>设置平台的区域和时区</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">语言</Label>
                <select
                  id="language"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="zh-CN"
                >
                  <option value="zh-CN">简体中文</option>
                  <option value="en-US">English (US)</option>
                  <option value="ja-JP">日本語</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">时区</Label>
                <select
                  id="timezone"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="Asia/Shanghai"
                >
                  <option value="Asia/Shanghai">中国标准时间 (GMT+8)</option>
                  <option value="America/New_York">东部标准时间 (GMT-5)</option>
                  <option value="Europe/London">格林威治标准时间 (GMT)</option>
                  <option value="Asia/Tokyo">日本标准时间 (GMT+9)</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">货币</Label>
                <select
                  id="currency"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="CNY"
                >
                  <option value="CNY">人民币 (¥)</option>
                  <option value="USD">美元 ($)</option>
                  <option value="EUR">欧元 (€)</option>
                  <option value="JPY">日元 (¥)</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>保存更改</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>主题设置</CardTitle>
              <CardDescription>自定义平台的外观和主题</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="dark-mode">深色模式</Label>
                  <Switch id="dark-mode" />
                </div>
                <div className="text-sm text-muted-foreground">启用深色模式以减少眼睛疲劳</div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>主题颜色</Label>
                <div className="grid grid-cols-5 gap-2">
                  <div className="flex h-10 w-10 rounded-full bg-blue-500 cursor-pointer ring-2 ring-offset-2 ring-blue-500" />
                  <div className="flex h-10 w-10 rounded-full bg-green-500 cursor-pointer" />
                  <div className="flex h-10 w-10 rounded-full bg-purple-500 cursor-pointer" />
                  <div className="flex h-10 w-10 rounded-full bg-red-500 cursor-pointer" />
                  <div className="flex h-10 w-10 rounded-full bg-orange-500 cursor-pointer" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>保存更改</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>布局设置</CardTitle>
              <CardDescription>自定义平台的布局和显示方式</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="compact-mode">紧凑模式</Label>
                  <Switch id="compact-mode" />
                </div>
                <div className="text-sm text-muted-foreground">减少界面元素之间的间距，显示更多内容</div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="animations">界面动画</Label>
                  <Switch id="animations" defaultChecked />
                </div>
                <div className="text-sm text-muted-foreground">启用界面过渡动画效果</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>保存更改</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>通知设置</CardTitle>
              <CardDescription>配置系统通知和提醒方式</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">邮件通知</Label>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                <div className="text-sm text-muted-foreground">接收重要事件的邮件通知</div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="browser-notifications">浏览器通知</Label>
                  <Switch id="browser-notifications" defaultChecked />
                </div>
                <div className="text-sm text-muted-foreground">在浏览器中接收实时通知</div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>通知类型</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-transactions" defaultChecked />
                    <label
                      htmlFor="notify-transactions"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      交易通知
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-users" defaultChecked />
                    <label
                      htmlFor="notify-users"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      用户通知
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-system" defaultChecked />
                    <label
                      htmlFor="notify-system"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      系统通知
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>保存更改</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>安全设置</CardTitle>
              <CardDescription>管理平台的安全选项和访问控制</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="two-factor">双因素认证</Label>
                  <Switch id="two-factor" />
                </div>
                <div className="text-sm text-muted-foreground">启用双因素认证以增强账户安全性</div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="session-timeout">会话超时</Label>
                  <select
                    id="session-timeout"
                    className="w-32 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue="30"
                  >
                    <option value="15">15 分钟</option>
                    <option value="30">30 分钟</option>
                    <option value="60">1 小时</option>
                    <option value="120">2 小时</option>
                  </select>
                </div>
                <div className="text-sm text-muted-foreground">设置自动登出的时间</div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="password">修改密码</Label>
                <div className="grid gap-2">
                  <Input id="current-password" type="password" placeholder="当前密码" />
                  <Input id="new-password" type="password" placeholder="新密码" />
                  <Input id="confirm-password" type="password" placeholder="确认新密码" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>保存更改</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>登录历史</CardTitle>
              <CardDescription>查看最近的登录活动</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b pb-4">
                  <div>
                    <div className="font-medium">成功登录</div>
                    <div className="text-sm text-muted-foreground">IP: 192.168.1.1 · Chrome on Windows</div>
                  </div>
                  <div className="text-sm text-muted-foreground">2023-05-21 14:30</div>
                </div>
                <div className="flex justify-between items-start border-b pb-4">
                  <div>
                    <div className="font-medium">成功登录</div>
                    <div className="text-sm text-muted-foreground">IP: 192.168.1.1 · Safari on macOS</div>
                  </div>
                  <div className="text-sm text-muted-foreground">2023-05-20 09:15</div>
                </div>
                <div className="flex justify-between items-start border-b pb-4">
                  <div>
                    <div className="font-medium text-red-500">失败登录尝试</div>
                    <div className="text-sm text-muted-foreground">IP: 203.0.113.1 · Firefox on Linux</div>
                  </div>
                  <div className="text-sm text-muted-foreground">2023-05-19 22:45</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">查看完整历史</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
