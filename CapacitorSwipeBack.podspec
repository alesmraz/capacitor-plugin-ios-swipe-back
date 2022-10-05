
  Pod::Spec.new do |s|
    s.name = 'CapacitorSwipeBack'
    s.version = '4.0.0'
    s.summary = 'Enable the back/forward swipe guestures support for iOS'
    s.license = 'MIT'
    s.homepage = 'https://github.com/alesmraz/capacitor-swipe-back'
    s.author = 'alesmraz.com'
    s.source = { :git => 'https://github.com/alesmraz/capacitor-swipe-back', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '13.0'
    s.dependency 'Capacitor'
  end